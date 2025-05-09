interface WorkItem {
  id: number;
  originator: string;
  client: string;
  line: string;
  type: string;
  status: string;
  created: string;
}

type Account = {
  id: number;
  accountName: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string; 
  lossRatio: string;
  appetite: string;
  status: string;
  triage: string;
  winnability: string;
};

type PoliciesData = {
  id: number;
  line: string;
  lineCode: string;
  effDate: string; 
  expDate: string;
  status: string;
  expiringTech: string;
  expiringPremium: string;
  renewalToTech: string;
  renewalTech: string;
  renewalPremium: string;
  rateChange: string;
  lossRatio: string;
};