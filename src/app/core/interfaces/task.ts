export interface Task {
  id: number;
  title: string;
  description: string;
  createDate: number;
  updateDate: number | null;
  isCompleted: boolean;
}

export interface TaskDialogData {
  mode: 'edit' | 'create' | 'delete';
  title: string;
  actionBtnTitle: string;
  task?: Task;
}
