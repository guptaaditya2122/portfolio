// interface SanityBody {
//     _createdAt: string;
//     _id: string;
//     _rev: string;
//     _updatedAt: string;
// }

// interface Image {
//     _type: "image";
//     asset: {
//         _ref: string;
//         _type: "reference";
//     }
// }

// export interface PageInfo extends SanityBody {
//     _type: 'pageInfo';
//     address: string;
//     backgroundInformation: string;
//     email: string;
//     role: string;
//     heroImage: Image;
//     name: string;
//     phoneNumber: string;
//     profilePic: Image;
// }

// export interface Technology extends SanityBody {
//     _type: "skill";
//     image: Image;
//     progress: number;
//     title:string;

// }

// export interface Skill extends SanityBody {
//     _type: "skill";
//     image: Image;
//     progress: number;
//     title:string;

// }

// export interface Project extends SanityBody {
//     _type: "project";
//     image: Image;
//     linkToBuild: string;
//     title:string;
//     summary:string;
//     technologies:Technology[];

// }
// export interface Experience extends SanityBody {
//     _type: "experience";
//     company:string;
//     companyImage:Image;
//     dateStarted:Date;
//     dateEnded:Date;
//     isCurrentWorkingHere:boolean;
//     jobTitle:string;
//     points:string[];
//     technologies:Technology[];

// }

// export interface Social extends SanityBody {
//     _type: "social";
//     title: string;
//     url: string;

// }
// export interface Social{
//     _id:number;
//     url:string;
// }

export interface Social {
    _id: number;
    url: string;
}

export interface PageInfo{
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: string;
    aboutImage:string;
    name: string;
    phoneNumber: string;
    socials: Social[]
}

export interface Experience  {
    company:string;
    companyImage:string;
    startedWork:string;
    endedWork:string;
    title:string;
    points:string[];
    technologies:Skills[];
    id:number

}

export interface Skills{
    _id:number;
    skill:Skill;
}

export interface Skill{
    image:string;
    progress:number
}

export interface Project{
    _id:number;
    image: string;
    linkToBuild: string;
    title:string;
    summary:string;
    technologies:Skills[];
}
