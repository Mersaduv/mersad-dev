export type Course = { 
    id: number
    title : string;
    avatar: string;
    tuition : number;
    instructor : string;
    descriptions? : string;
    keyword: string;
    episode: number;
    category : string;
    isComplete: boolean;
    thumbnailUrl : string;
    isDeleted : boolean;
    created : string;
    lastUpdated : string;
};

export type GetCoursesResponse= {
    //count: number;
    courses: Course[]
  };