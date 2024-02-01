export type Division = 'projects' | 'research' | 'education';
export type ExtendedDivisions = Exclude<
  Division | 'education.mentor' | 'education.tip',
  'education'
>;
