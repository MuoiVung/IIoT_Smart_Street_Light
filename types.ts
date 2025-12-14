export interface NavItem {
  label: string;
  path: string;
}

export enum ConnectionStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  WARNING = 'WARNING'
}