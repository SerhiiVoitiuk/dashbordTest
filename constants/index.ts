import { House, KeyRound, Goal, Building2, FileSymlink, Users, Database } from 'lucide-react';

export const links = [
  {
    id: 1,
    Icon: House,
    route: "/",
    text: "Dashboard",
  },
  {
    id: 2,
    Icon: Database,
    route: "/accounts",
    text: "Accounts",
  },
  {
    id: 3,
    Icon: Users,
    route: "/brokers",
    text: "Brokers",
  },
  {
    id: 4,
    Icon: FileSymlink,
    route: "/submissions",
    text: "Submissions",
  },
  {
    id: 5,
    Icon: Building2,
    route: "/organizations",
    text: "Organizations",
  },
  {
    id: 6,
    Icon: Goal,
    route: "/goals&Rules",
    text: "Goals & Rules",
  },
  {
    id: 7,
    Icon: KeyRound,
    route: "/admin",
    text: "Admin",
  },
]

export const buttonWorkData = [
  { id: 0, text: "Assigned to me(12)" },
  { id: 1, text: "Pending Review(8)" },
  { id: 2, text: "Referrals(3)" },
];