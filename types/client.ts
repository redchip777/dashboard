// types/client.ts

export interface OverviewData {
    title: string;
    metrics: {
      totalViews: number;
      totalLeads: number;
      leadsToday: number;
    };
    charts: {
      pageViews: ChartData[];
      engagement: ChartData[];
    };
  }
  
  export interface ChartData {
    name: string;
    value: number;
  }
  
  export interface OwnershipData {
    id: string;
    institution: string;
    shares: number;
    change: string;
  }
  
  export interface EmailPerformance {
    id: string;
    clientId: string;
    date: Date;
    sends: number;
    opens: number;
    clicks: number;
    conversionRate: number;
  }
  
  export interface Feedback {
    id: string;
    clientId: string;
    comment: string;
    rating: number;
    createdAt: Date;
  }
  
  export interface LandingPageTraffic {
    id: string;
    clientId: string;
    date: Date;
    pageViews: number;
    uniqueVisitors: number;
    conversionRate: number;
  }
  
  export interface ResearchCoverage {
    id: string;
    clientId: string;
    date: Date;
    firm: string;
    rating: string;
    priceTarget: number;
  }
  
  export interface ShortPosition {
    id: string;
    clientId: string;
    date: Date;
    shortVolume: number;
    shortExemptVolume: number;
    totalVolume: number;
  }
  
  export interface Stats {
    id: string;
    clientId: string;
    title: string;
    value: string;
  }
  
  export interface WebinarPerformance {
    id: string;
    clientId: string;
    date: Date;
    registrations: number;
    attendance: number;
    conversionRate: number;
  }
  