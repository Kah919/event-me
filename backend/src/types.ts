export type Id = number;

export interface Event {
	id: Id;    
  title: string;
  description: string;
  image_url: string;
  date: Date;
  host_id: number;
	host: User;
  rsvps: RSVP[];
}

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
}

export interface RSVP {
	event_id: number;
  name: string;
  email: string;
}