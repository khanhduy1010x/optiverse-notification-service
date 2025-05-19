import { NotificationService } from './notification.service';
import { ApiResponse } from 'src/common/api-response';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getUserNotifications(req: any): Promise<ApiResponse<any>>;
    markAsRead(id: string): Promise<ApiResponse<void>>;
}
