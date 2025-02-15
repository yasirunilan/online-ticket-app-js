import User from "./user.js";
import Booking from "./booking.js";
import WaitingListEntry from "./waitingListEntry.js";
import OnlineEvent from "./onlineEvent.js";

User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });
Booking.belongsTo(OnlineEvent, { foreignKey: "eventId" });
OnlineEvent.hasMany(Booking, { foreignKey: "eventId" });
User.hasMany(WaitingListEntry, { foreignKey: "userId" });
WaitingListEntry.belongsTo(User, { foreignKey: "userId" });
WaitingListEntry.belongsTo(OnlineEvent, { foreignKey: "eventId" });
OnlineEvent.hasMany(WaitingListEntry, { foreignKey: "eventId" });

export { User, Booking, WaitingListEntry, OnlineEvent };
