export type Lead = {
  id: number;
  name: string;
  source: string;
  status: 'Hot' | 'Qualified' | 'Follow-up' | 'Closed';
  budget: string;
  location: string;
  agent: string;
};

export type Property = {
  id: number;
  title: string;
  type: 'Apartment' | 'Villa' | 'Office' | 'Townhouse';
  status: 'Available' | 'Under Offer' | 'Sold';
  price: string;
  location: string;
  beds: number;
  baths: number;
};

export type Deal = {
  id: number;
  client: string;
  property: string;
  value: string;
  stage: 'Lead' | 'Negotiation' | 'Closing' | 'Closed';
  agent: string;
};

export type Client = {
  id: number;
  name: string;
  type: 'Buyer' | 'Seller' | 'Investor';
  city: string;
  contact: string;
  lastActivity: string;
};

export type Task = {
  id: number;
  title: string;
  assignee: string;
  due: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Done';
};

export const leads: Lead[] = [
  { id: 1, name: 'Alicia Morgan', source: 'Website', status: 'Hot', budget: '$750k - $900k', location: 'Downtown', agent: 'Rina Patel' },
  { id: 2, name: 'Daniel Lee', source: 'Referral', status: 'Qualified', budget: '$1.2M - $1.5M', location: 'Brooklyn', agent: 'Sam Carter' },
  { id: 3, name: 'Priya Shah', source: 'Instagram', status: 'Follow-up', budget: '$500k - $650k', location: 'Austin', agent: 'Olivia West' },
  { id: 4, name: 'Marcus Hill', source: 'Open House', status: 'Closed', budget: '$950k', location: 'Miami', agent: 'Ava Brooks' },
];

export const properties: Property[] = [
  { id: 1, title: 'Skyline Heights', type: 'Apartment', status: 'Available', price: '$680,000', location: 'Seattle', beds: 2, baths: 2 },
  { id: 2, title: 'Maple Grove Villa', type: 'Villa', status: 'Under Offer', price: '$1,250,000', location: 'Phoenix', beds: 4, baths: 3 },
  { id: 3, title: 'Harbor Point', type: 'Office', status: 'Available', price: '$2,800,000', location: 'Boston', beds: 0, baths: 2 },
  { id: 4, title: 'Oakridge Homes', type: 'Townhouse', status: 'Sold', price: '$860,000', location: 'Denver', beds: 3, baths: 2 },
];

export const deals: Deal[] = [
  { id: 1, client: 'Alicia Morgan', property: 'Skyline Heights', value: '$680k', stage: 'Negotiation', agent: 'Rina Patel' },
  { id: 2, client: 'Daniel Lee', property: 'Maple Grove Villa', value: '$1.25M', stage: 'Closing', agent: 'Sam Carter' },
  { id: 3, client: 'Priya Shah', property: 'City View Condo', value: '$510k', stage: 'Lead', agent: 'Olivia West' },
  { id: 4, client: 'Marcus Hill', property: 'Oakridge Homes', value: '$860k', stage: 'Closed', agent: 'Ava Brooks' },
];

export const clients: Client[] = [
  { id: 1, name: 'Alicia Morgan', type: 'Buyer', city: 'Seattle', contact: 'alice@example.com', lastActivity: '2 days ago' },
  { id: 2, name: 'Marcus Hill', type: 'Seller', city: 'Denver', contact: 'marcus@example.com', lastActivity: '4 days ago' },
  { id: 3, name: 'Priya Shah', type: 'Investor', city: 'Austin', contact: 'priya@example.com', lastActivity: '1 day ago' },
  { id: 4, name: 'Daniel Lee', type: 'Buyer', city: 'Brooklyn', contact: 'daniel@example.com', lastActivity: '6 hours ago' },
];

export const tasks: Task[] = [
  { id: 1, title: 'Schedule follow-up call with Alicia', assignee: 'Rina', due: 'Today', priority: 'High', status: 'Pending' },
  { id: 2, title: 'Prepare offer package for Daniel', assignee: 'Sam', due: 'Tomorrow', priority: 'Medium', status: 'In Progress' },
  { id: 3, title: 'Review property photos for Maple Grove', assignee: 'Olivia', due: 'This week', priority: 'Low', status: 'Done' },
  { id: 4, title: 'Send seller update to Marcus', assignee: 'Ava', due: 'Friday', priority: 'High', status: 'Pending' },
];
