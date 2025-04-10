export interface Trip {
    from: string;
    to: string;
    type: 'continued' | 'non-continued' | 'repeated';
  }
  