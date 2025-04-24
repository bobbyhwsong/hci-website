import { ProjectPhase, TeamMember } from '../types';

export const PROJECT_NAME = "응급 도우미";
export const PROJECT_TAGLINE = "탈북민의 응급상황 대처 능력 향상을 위한 디지털 솔루션";

export const PROJECT_DESCRIPTION = `
우리의 프로젝트는 탈북민들이 한국에서 겪을 수 있는 응급상황에 더욱 효과적으로 대처할 수 있도록 돕는 것을 목표로 합니다.
사용자 연구와 반복적인 프로토타이핑을 통해, 우리는 탈북민들의 특수한 요구사항을 고려한 직관적이고 
접근하기 쉬운 응급상황 대처 솔루션을 개발하고 있습니다.
`;

export const TEAM_NAME = "비정형싱킹";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "송형우",
    role: "UX 리서치 & 프로토타입 개발",
    bio: "사용자 연구 및 프로토타입 개발 담당",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "김정하",
    role: "UI 디자인 & 프로젝트 관리",
    bio: "디자인 및 프로젝트 조율 담당",
    image: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const projectPhases: ProjectPhase[] = [
  {
    id: "need-finding",
    title: "필요 발견하기",
    description: "탈북민들의 응급상황 대처 경험과 어려움을 이해하기 위해 심층 인터뷰와 설문조사를 진행했습니다. 특히 언어 차이와 문화적 차이로 인한 어려움에 초점을 맞추었습니다.",
    completed: true,
    image: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "need-finding-report",
        title: "사용자 연구 보고서",
        description: "탈북민의 응급상황 대처 관련 니즈 분석",
        type: "report",
        url: "#",
        previewImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "idea-generation",
    title: "아이디어 도출하기",
    description: "연구 결과를 바탕으로 탈북민들의 응급상황 대처 능력을 향상시킬 수 있는 다양한 해결책을 도출했습니다.",
    completed: true,
    image: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "ideation-workshop",
        title: "아이디어 워크샵 결과",
        description: "브레인스토밍 과정과 초기 컨셉",
        type: "report",
        url: "#",
        previewImage: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "concept-video",
    title: "컨셉 비디오",
    description: "응급상황 대처를 위한 디지털 솔루션의 주요 기능과 사용 시나리오를 보여주는 비디오를 제작했습니다.",
    completed: true,
    image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "concept-video-file",
        title: "컨셉 시연 영상",
        description: "솔루션 컨셉을 설명하는 짧은 영상",
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        previewImage: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "low-fi-prototype",
    title: "Lo-fi 프로토타입 & 테스트",
    description: "종이 프로토타입과 와이어프레임을 통해 초기 디자인을 테스트하고 사용자 피드백을 수집했습니다.",
    completed: true,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "low-fi-wireframes",
        title: "Lo-fi 와이어프레임",
        description: "초기 스케치와 와이어프레임",
        type: "prototype",
        url: "#",
        previewImage: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "medium-fi-prototype",
    title: "Mid-fi 프로토타입",
    description: "Lo-fi 테스트 결과를 반영하여 더 상세한 디지털 프로토타입을 개발했습니다.",
    completed: false,
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "medium-fi-prototype-link",
        title: "Mid-fi 인터랙티브 프로토타입",
        description: "주요 기능이 구현된 클릭 가능한 프로토타입 (준비중)",
        type: "prototype",
        previewImage: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "heuristic-evaluation",
    title: "그룹 휴리스틱 평가",
    description: "사용성 전문가들과 함께 디자인의 사용성 문제를 평가하고 개선점을 도출했습니다.",
    completed: false,
    image: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "heuristic-evaluation-report",
        title: "휴리스틱 평가 보고서",
        description: "사용성 이슈 분석 및 개선 제안 (준비중)",
        type: "report",
        previewImage: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "hi-fi-prototype",
    title: "Hi-fi 프로토타입",
    description: "모든 피드백을 반영한 최종 프로토타입으로, 실제 제품과 유사한 완성도를 보여줍니다.",
    completed: false,
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "hi-fi-prototype-link",
        title: "Hi-fi 인터랙티브 프로토타입",
        description: "완성된 디자인이 적용된 최종 프로토타입 (준비중)",
        type: "prototype",
        previewImage: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    id: "final-presentation",
    title: "포스터 & 최종 발표",
    description: "프로젝트의 전체 과정과 최종 결과물을 보여주는 발표 자료입니다.",
    completed: false,
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    artifacts: [
      {
        id: "final-poster",
        title: "프로젝트 포스터",
        description: "프로젝트 요약 포스터 (준비중)",
        type: "poster",
        previewImage: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: "final-presentation",
        title: "최종 발표자료",
        description: "프로젝트 전체 과정과 결과 발표 (준비중)",
        type: "presentation",
        previewImage: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  }
];