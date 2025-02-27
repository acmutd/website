export type Division = 'projects' | 'research' | 'education' | 'development';
export type ExtendedDivisions = Exclude<
  Division | 'education.mentor' | 'education.tip',
  'education'
>;
