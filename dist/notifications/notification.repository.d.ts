import { Notification, NotificationDocument } from './notification.schema';
import { Model } from 'mongoose';
export declare class NotificationRepository {
    private readonly model;
    constructor(model: Model<NotificationDocument>);
    create(data: Partial<Notification>): Promise<Notification>;
    getByUser(userId: string): Promise<Notification[]>;
    markAsRead(id: string): Promise<void>;
}
