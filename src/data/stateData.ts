export interface City {
  name: string;
  imageUrl: string;
  description: string;
}

export interface WorkProject {
  title: string;
  description: string;
  year?: string;
  type: string;
}

export interface StateData {
  name: string;
  slug: string;
  heroImageUrl: string;
  description: string;
  majorCities: City[];
  workDone: WorkProject[];
}

export const statesData: StateData[] = [
  {
    name: "Georgia",
    slug: "georgia",
    heroImageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Georgia Environmental Construction's home state, where we've been serving communities for over 30 years with comprehensive disaster recovery and construction services.",
    majorCities: [
      {
        name: "Atlanta",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Georgia's capital and largest city, where we've completed numerous commercial roofing and civil construction projects."
      },
      {
        name: "Augusta",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Home to major military installations where we've provided specialized construction and environmental services."
      },
      {
        name: "Savannah",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Historic coastal city where we've handled hurricane recovery and flood mitigation projects."
      },
      {
        name: "Columbus",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Major industrial center where we've completed large-scale demolition and civil construction projects."
      }
    ],
    workDone: [
      {
        title: "Hurricane Michael Recovery",
        description: "Led comprehensive debris removal and infrastructure restoration across multiple counties following Hurricane Michael's devastating impact.",
        year: "2018",
        type: "Disaster Recovery"
      },
      {
        title: "Atlanta Commercial District Roofing",
        description: "Completed over 50 commercial roofing projects in the Atlanta metropolitan area, including hospitals, schools, and office complexes.",
        year: "2019-2023",
        type: "Commercial Roofing"
      },
      {
        title: "Fort Gordon Infrastructure Development",
        description: "Provided civil construction services for military base expansion including road construction and utility installation.",
        year: "2020-2022",
        type: "Civil Construction"
      },
      {
        title: "Savannah Port Authority Projects",
        description: "Executed demolition and site preparation for port expansion projects supporting Georgia's growing logistics industry.",
        year: "2021",
        type: "Demolition"
      }
    ]
  },
  {
    name: "Florida",
    slug: "florida",
    heroImageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A key state for our disaster recovery operations, where we've responded to numerous hurricanes and provided extensive reconstruction services.",
    majorCities: [
      {
        name: "Miami",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Major metropolitan area where we've handled hurricane recovery and high-rise construction projects."
      },
      {
        name: "Tampa",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Gulf Coast city where we've provided storm surge mitigation and commercial roofing services."
      },
      {
        name: "Jacksonville",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Northeast Florida's largest city, site of major infrastructure and military construction projects."
      },
      {
        name: "Orlando",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Central Florida hub where we've completed commercial and residential roofing projects."
      }
    ],
    workDone: [
      {
        title: "Hurricane Ian Response",
        description: "Mobilized emergency response teams for debris removal and infrastructure restoration across Southwest Florida.",
        year: "2022",
        type: "Disaster Recovery"
      },
      {
        title: "Miami-Dade School District Roofing",
        description: "Comprehensive roofing renovation program covering 25 schools throughout Miami-Dade County.",
        year: "2020-2021",
        type: "Commercial Roofing"
      },
      {
        title: "Tampa Bay Area Storm Recovery",
        description: "Coordinated multi-county debris removal and emergency repairs following severe storm damage.",
        year: "2019",
        type: "Disaster Recovery"
      },
      {
        title: "Jacksonville Port Expansion",
        description: "Civil construction and site preparation for major port facility expansion project.",
        year: "2021-2023",
        type: "Civil Construction"
      }
    ]
  },
  {
    name: "Alabama",
    slug: "alabama",
    heroImageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Serving Alabama communities with tornado recovery, civil construction, and environmental services across the state.",
    majorCities: [
      {
        name: "Birmingham",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Alabama's largest city where we've completed major industrial and commercial construction projects."
      },
      {
        name: "Mobile",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Gulf Coast port city where we've provided hurricane recovery and marine construction services."
      },
      {
        name: "Huntsville",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Technology and aerospace hub where we've supported defense contractor facility construction."
      },
      {
        name: "Montgomery",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "State capital where we've completed government facility construction and renovation projects."
      }
    ],
    workDone: [
      {
        title: "Tornado Alley Recovery Operations",
        description: "Rapid response and debris removal following devastating tornado outbreaks across central Alabama.",
        year: "2019-2022",
        type: "Disaster Recovery"
      },
      {
        title: "Birmingham Medical Center Expansion",
        description: "Civil construction and site development for major hospital expansion project.",
        year: "2020-2021",
        type: "Civil Construction"
      },
      {
        title: "Mobile Bay Hurricane Preparedness",
        description: "Infrastructure hardening and storm surge barrier construction along Alabama's Gulf Coast.",
        year: "2021",
        type: "Civil Construction"
      },
      {
        title: "Huntsville Defense Facility Construction",
        description: "Specialized construction services for classified defense contractor facilities.",
        year: "2022-2023",
        type: "Civil Construction"
      }
    ]
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    heroImageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Providing comprehensive construction and disaster recovery services throughout the Palmetto State.",
    majorCities: [
      {
        name: "Charleston",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Historic coastal city where we've handled hurricane recovery and historic preservation projects."
      },
      {
        name: "Columbia",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "State capital and university town where we've completed educational facility construction."
      },
      {
        name: "Greenville",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Upstate manufacturing center where we've provided industrial construction services."
      },
      {
        name: "Myrtle Beach",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Popular coastal destination where we've completed resort and commercial construction projects."
      }
    ],
    workDone: [
      {
        title: "Hurricane Florence Recovery",
        description: "Comprehensive storm damage assessment and debris removal across the South Carolina coast.",
        year: "2018",
        type: "Disaster Recovery"
      },
      {
        title: "Charleston Port Authority Projects",
        description: "Marine construction and port facility expansion supporting increased cargo capacity.",
        year: "2020-2022",
        type: "Civil Construction"
      },
      {
        title: "University of South Carolina Campus Development",
        description: "Multiple building construction and renovation projects across the Columbia campus.",
        year: "2019-2021",
        type: "Civil Construction"
      },
      {
        title: "Myrtle Beach Tourism Infrastructure",
        description: "Commercial roofing and construction services for hotels and entertainment facilities.",
        year: "2021-2023",
        type: "Commercial Roofing"
      }
    ]
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    heroImageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Supporting North Carolina's growth with construction services from the mountains to the coast.",
    majorCities: [
      {
        name: "Charlotte",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Major financial center where we've completed high-rise and commercial construction projects."
      },
      {
        name: "Raleigh",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "State capital and technology hub where we've supported government and tech facility construction."
      },
      {
        name: "Wilmington",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Coastal city where we've provided hurricane recovery and marine construction services."
      },
      {
        name: "Asheville",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Mountain region center where we've completed tourism and residential construction projects."
      }
    ],
    workDone: [
      {
        title: "Hurricane Florence Military Base Recovery",
        description: "Emergency response and infrastructure restoration at multiple military installations.",
        year: "2018-2019",
        type: "Disaster Recovery"
      },
      {
        title: "Charlotte Banking District Development",
        description: "Commercial construction and roofing services for major financial institution facilities.",
        year: "2020-2022",
        type: "Commercial Roofing"
      },
      {
        title: "Research Triangle Park Expansion",
        description: "Civil construction supporting technology campus development in the Raleigh-Durham area.",
        year: "2021-2023",
        type: "Civil Construction"
      },
      {
        title: "Outer Banks Storm Mitigation",
        description: "Coastal protection and infrastructure hardening projects along North Carolina's barrier islands.",
        year: "2019-2021",
        type: "Civil Construction"
      }
    ]
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    heroImageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Serving Tennessee communities with comprehensive construction and disaster recovery services across the Volunteer State.",
    majorCities: [
      {
        name: "Nashville",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Music City where we've completed entertainment venue construction and tornado recovery projects."
      },
      {
        name: "Memphis",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Mississippi River port city where we've provided logistics and industrial construction services."
      },
      {
        name: "Knoxville",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "East Tennessee hub where we've supported university and government facility construction."
      },
      {
        name: "Chattanooga",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Scenic river city where we've completed tourism and manufacturing facility projects."
      }
    ],
    workDone: [
      {
        title: "Nashville Tornado Recovery",
        description: "Rapid response debris removal and infrastructure restoration following devastating tornado outbreak.",
        year: "2020",
        type: "Disaster Recovery"
      },
      {
        title: "Memphis Logistics Hub Development",
        description: "Large-scale warehouse and distribution center construction supporting FedEx operations.",
        year: "2019-2021",
        type: "Civil Construction"
      },
      {
        title: "Tennessee Valley Authority Projects",
        description: "Specialized construction services for power generation and transmission infrastructure.",
        year: "2020-2023",
        type: "Civil Construction"
      },
      {
        title: "Great Smoky Mountains Tourism Infrastructure",
        description: "Construction and renovation of visitor facilities and access roads in the national park area.",
        year: "2021-2022",
        type: "Civil Construction"
      }
    ]
  },
  {
    name: "Mississippi",
    slug: "mississippi",
    heroImageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Providing essential construction and disaster recovery services throughout Mississippi, with extensive hurricane response experience.",
    majorCities: [
      {
        name: "Jackson",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "State capital where we've completed government facility construction and infrastructure projects."
      },
      {
        name: "Gulfport",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Gulf Coast city where we've provided extensive hurricane recovery and marine construction services."
      },
      {
        name: "Biloxi",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Coastal casino and tourism center where we've completed resort and entertainment facility projects."
      },
      {
        name: "Hattiesburg",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "University town where we've supported educational facility construction and tornado recovery."
      }
    ],
    workDone: [
      {
        title: "Hurricane Katrina Long-term Recovery",
        description: "Multi-year infrastructure rebuilding and community restoration along the Mississippi Gulf Coast.",
        year: "2005-2010",
        type: "Disaster Recovery"
      },
      {
        title: "Mississippi Gaming Commission Projects",
        description: "Construction and renovation of casino facilities and supporting infrastructure along the coast.",
        year: "2018-2020",
        type: "Commercial Construction"
      },
      {
        title: "Jackson Water Infrastructure Upgrade",
        description: "Critical water system repairs and upgrades supporting the state capital's infrastructure needs.",
        year: "2021-2022",
        type: "Civil Construction"
      },
      {
        title: "Hurricane Ida Response",
        description: "Emergency debris removal and power restoration across southern Mississippi.",
        year: "2021",
        type: "Disaster Recovery"
      }
    ]
  },
  {
    name: "Louisiana",
    slug: "louisiana",
    heroImageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Extensive experience in Louisiana's unique environment, providing hurricane recovery, marine construction, and specialized environmental services.",
    majorCities: [
      {
        name: "New Orleans",
        imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Historic port city where we've provided hurricane recovery and flood protection construction."
      },
      {
        name: "Baton Rouge",
        imageUrl: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "State capital and petrochemical center where we've completed industrial and government projects."
      },
      {
        name: "Lafayette",
        imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Oil and gas industry hub where we've provided specialized industrial construction services."
      },
      {
        name: "Lake Charles",
        imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
        description: "Southwest Louisiana city where we've led major hurricane recovery operations."
      }
    ],
    workDone: [
      {
        title: "Hurricane Laura Recovery Operations",
        description: "Massive debris removal and infrastructure restoration across Southwest Louisiana.",
        year: "2020-2021",
        type: "Disaster Recovery"
      },
      {
        title: "New Orleans Levee System Enhancement",
        description: "Critical flood protection infrastructure construction and reinforcement projects.",
        year: "2018-2020",
        type: "Civil Construction"
      },
      {
        title: "Louisiana Petrochemical Facility Construction",
        description: "Specialized industrial construction for major chemical processing facilities.",
        year: "2019-2022",
        type: "Industrial Construction"
      },
      {
        title: "Hurricane Ida Emergency Response",
        description: "Coordinated multi-parish emergency response and power restoration efforts.",
        year: "2021",
        type: "Disaster Recovery"
      }
    ]
  }
];

export const getStateBySlug = (slug: string): StateData | undefined => {
  return statesData.find(state => state.slug === slug);
};

export const getAllStates = (): StateData[] => {
  return statesData;
};