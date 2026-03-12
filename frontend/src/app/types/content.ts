export type CommunityPageKey = 'parents' | 'alumni' | 'faculty';

export type Announcement = {
  id: string;
  title: string;
  date: string;
  tag: string;
  message: string;
};

export type CommunityGroup = {
  slug: CommunityPageKey;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
};

export type ParentTestimonial = {
  id: string;
  name: string;
  relation: string;
  image: string;
  quote: string;
};

export type AlumniTestimonial = {
  id: string;
  name: string;
  detail: string;
  image: string;
  quote: string;
};

export type FacultyMember = {
  id: string;
  name: string;
  phone: string;
  qualification: string;
  photo: string;
};

export type CommunityContent = {
  groups: CommunityGroup[];
  parents: ParentTestimonial[];
  alumni: AlumniTestimonial[];
  faculty: FacultyMember[];
};

export type AdminCredentials = {
  username: string;
  password: string;
};

export type SiteContent = {
  announcements: Announcement[];
  community: CommunityContent;
};
