import { ConflictError, NotFoundError } from "../utils/appError.js";
import { OnlineEvent, WaitingListEntry } from "../models/associations.js";
export class EventService {
  async createEvent(payload) {
    const existingEvent = await OnlineEvent.findOne({
      where: { name: payload.name },
    });
    if (existingEvent) {
      throw new ConflictError("Event with the same name already exists");
    }
    const event = OnlineEvent.create(payload);
    return event;
  }
  async getEvent(eventId) {
    const existingEvent = await OnlineEvent.findByPk(eventId, {
      include: [{ model: WaitingListEntry }],
    });
    if (!existingEvent) {
      throw new NotFoundError("Event not found");
    }
    return existingEvent;
  }
}

export default new EventService();
