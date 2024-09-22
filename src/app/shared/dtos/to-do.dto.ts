export interface ToDoDto {
  guid: string;
  deadlineDate?: Date;
  description?: string;
  location?: string;
  name: string;
  priority: number;
  reminderDate?: Date;
}

export const TO_DO_FIELDS = [
  "deadlineDate",
  "description",
  "location",
  "name",
  "priority",
  "reminderDate"
];
