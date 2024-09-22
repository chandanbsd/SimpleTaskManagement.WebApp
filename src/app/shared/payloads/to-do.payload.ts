export interface ToDoPayload
{
  deadlineDate?: Date;
  description?: string;
  location?: string;
  name: string;
  priority?: number;
  reminderDate?: Date;
}
