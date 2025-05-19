import { NotificationRepository } from './notification.repository';
export declare class NotificationService {
    private readonly repo;
    constructor(repo: NotificationRepository);
    createAchievementNotify(userId: string, title: string, message: string, achievementId?: string): Promise<import("./notification.schema").Notification>;
    getUserNotifications(userId: string): Promise<import("./notification.schema").Notification[]>;
    markAsRead(id: string): Promise<void>;
}
