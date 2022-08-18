export enum REQUEST {
  DAY_OFF = "day_off",
  WORK_REMOTE = "work_remote",
  WORK_LATE = "work_late",
  SUPPORT_DEVICE = "support_device",
}

export enum PROCESSING_STATUS {
  WAIT_TO_ACCEPT = "wait_to_accept",
  ACCEPTED_BY_MANAGER = "accepted_by_manager",
  ACCEPTED_BY_HR = "accepted_by_hr",
  CANCELED = "canceled",
  REJECTED = "rejected",
}

export const STATUS_NOT_ACCEPT: string[] = [
  PROCESSING_STATUS.CANCELED,
  PROCESSING_STATUS.REJECTED,
];

export const STATUS_CAN_ACCEPT: string[] = [
  PROCESSING_STATUS.WAIT_TO_ACCEPT,
  PROCESSING_STATUS.ACCEPTED_BY_MANAGER,
];

export const STATUS_CAN_CANCEL: string[] = [PROCESSING_STATUS.WAIT_TO_ACCEPT];

export const STATUS_CAN_CREATE: string[] = [
  PROCESSING_STATUS.WAIT_TO_ACCEPT,
  PROCESSING_STATUS.ACCEPTED_BY_MANAGER,
  PROCESSING_STATUS.ACCEPTED_BY_HR,
];

export const STATUS_CAN_REJECT: string[] = [
  PROCESSING_STATUS.WAIT_TO_ACCEPT,
  PROCESSING_STATUS.ACCEPTED_BY_MANAGER,
  // PROCESSING_STATUS.ACCEPTED_BY_HR, 
];
export const STATUS_CAN_ARCHIVE: string[] =[
  PROCESSING_STATUS.ACCEPTED_BY_HR, 
  PROCESSING_STATUS.REJECTED
]

export const STATUS_CAN_UPDATE: string[] = [
  PROCESSING_STATUS.WAIT_TO_ACCEPT,
];

export enum REQUEST_STRING {
  DAY_OFF = "Nghỉ phép",
  WORK_REMOTE = "Work remote",
  WORK_LATE = "Đi trễ",
  SUPPORT_DEVICE = "Hỗ trợ",
}

export const PAID_LEAVE_DATES: number = 12