const $ = id => document.getElementById(id);

const SUBJECTS = ["数学", "英語", "物理", "化学", "国語", "情報", "その他"];
const PRIORITIES = ["高", "普通", "低"];
const IMPORTANCE_LEVELS = ["important", "notImportant"];
const URGENCY_LEVELS = ["urgent", "notUrgent"];
const LANGUAGE_KEY = "studyflow_language";
const NICKNAME_KEY = "studyflow_nickname";
const GRADE_KEY = "studyflow_grade";
const AVATAR_EMOJI_KEY = "studyflow_avatar_emoji";
const AVATAR_COLOR_KEY = "studyflow_avatar_color";
const PROFILE_SETUP_KEY = "studyflow_profile_setup_done";
const EXAM_NAME_KEY = "studyflow_exam_name";
const EXAM_DATE_KEY = "studyflow_exam_date";
const AVATAR_OPTIONS = ["🐱", "🐶", "🐰", "🐻", "🐼", "🐨", "🦊", "🐯", "🐷", "🐸", "🐧", "🐹"];
const GRADE_OPTIONS = ["中一", "中二", "中三", "高一", "高二", "高三", "大学", "その他"];
const SUBJECT_COLORS = {
  数学: "#db2f76",
  英語: "#ffa409",
  物理: "#5f8fb9",
  化学: "#35a979",
  国語: "#7774b8",
  情報: "#ef6f6c",
  その他: "#2a1528"
};

const I18N = {
  ja: {
    locale: "ja-JP",
    htmlLang: "ja",
    languageLabel: "言語",
    nicknameLabel: "ニックネーム",
    nicknamePlaceholder: "例：Alex / ひな / 小林 / 민지",
    gradeLabel: "学年",
    gradePlaceholder: "例：高三",
    avatarEmojiLabel: "アイコン",
    avatarEmojiPlaceholder: "例：🐱",
    avatarColorLabel: "色",
    setupTitle: "プロフィールを設定",
    setupSubtitle: "言語、ニックネーム、アイコン、学年を登録しましょう。",
    setupLanguageLabel: "言語",
    setupSave: "OK",
    defaultName: "学習者",
    viewPlan: "計画を見る",
    streakWord: "連続学習!",
    menubar: "メニュー",
    navDashboard: "ホーム",
    navCourses: "週計画",
    navTimer: "タイマー",
    navRecords: "記録",
    navProgress: "進捗",
    lastAccess: "最近の学習コース",
    courseMath: "数学演習",
    courseEnglish: "英語長文",
    courseInfo: "情報基礎",
    moreCourses: "+4件",
    welcomeTemplate: "おかえりなさい、{name}さん",
    heroStrong: "成功するか",
    heroMuted: "成長するか",
    todayTasksCard: "今日のタスク",
    focusTimeCard: "集中時間",
    examCountdownCard: "試験まで",
    examNamePlaceholder: "試験名",
    examDateLabel: "試験日",
    examSave: "保存",
    examTapHint: "タップして登録する",
    examUnset: "--",
    daysLeft: "{days}日",
    examToday: "今日",
    examPassed: "終了",
    todayProgress: "今日の進捗",
    studyTime: "学習時間",
    upcomingFocus: "未完了タスク",
    focusBlocks: "今日の集中タスク",
    learningActivity: "学習活動",
    activitySubtitle: "科目ごとの学習時間を記録し、週間の進捗を確認できます。",
    timeSpent: "学習時間",
    coursesTab: "コース",
    quizzes: "小テスト",
    certificates: "修了証",
    daily: "日別",
    hrs12: "12時間",
    hrs8: "8時間",
    hrs4: "4時間",
    hrs0: "0時間",
    mon: "月",
    tue: "火",
    wed: "水",
    thu: "木",
    fri: "金",
    sat: "土",
    sun: "日",
    coursesProgress: "週計画",
    planSubtitle: "今週やることを重要度と緊急度で整理しましょう。",
    contentPlaceholder: "例：プラチカ 10問",
    minutesPlaceholder: "予定(分)",
    add: "追加",
    prevWeek: "前の週",
    thisWeek: "今週",
    nextWeek: "次の週",
    importanceLabel: "重要度",
    urgencyLabel: "緊急度",
    urgent: "緊急",
    notUrgent: "緊急ではない",
    important: "重要",
    notImportant: "重要ではない",
    importantUrgent: "重要・緊急",
    importantNotUrgent: "重要・緊急ではない",
    notImportantUrgent: "重要ではない・緊急",
    notImportantNotUrgent: "重要ではない・緊急ではない",
    matrixHint: "同じ象限の中でドラッグして順番を変えられます。",
    nameHeader: "内容 ↕",
    coachHeader: "科目 ↕",
    progressHeader: "進捗 ↕",
    focusTimer: "集中タイマー",
    timerSubtitle: "実際の学習時間を記録します。",
    ready: "準備完了",
    studying: "学習中",
    paused: "一時停止",
    countUp: "ストップウォッチ",
    countDown: "カウントダウン",
    countdownMinutes: "カウントダウン(分)",
    start: "開始",
    pause: "一時停止",
    reset: "リセット",
    studyLogMinutesPlaceholder: "学習時間(分)",
    studyLogAdd: "記録",
    studyLogNoMinutes: "学習時間を入力してください。",
    morningReview: "朝の復習",
    break9: "休憩、9時",
    focusTime: "集中時間",
    quizTime: "小テスト、14時",
    workshop: "UIデザイン講座",
    learningRecords: "学習記録",
    recordsSubtitle: "最近の学習状況",
    progress: "進捗",
    last7Days: "過去7日間",
    weekTime: "週間学習時間",
    streak: "連続学習",
    subjectStudyTime: "科目別学習時間",
    noTaskAlert: "学習内容を入力してください。",
    deleteConfirm: "この予定を削除しますか？",
    resetConfirm: "今日の学習時間をリセットしますか？",
    deleteRecordConfirm: "この日の学習記録を削除しますか？",
    emptyTasks: "今日の学習予定はまだありません。",
    emptyRecords: "まだ学習記録がありません。",
    emptySubjects: "タイマーを使うと科目別の記録が表示されます。",
    done: "完了",
    minute: "分",
    hour: "時間",
    priority: "重要度",
    studyCoach: "学習科目",
    subjects: {
      数学: "数学",
      英語: "英語",
      物理: "物理",
      化学: "化学",
      国語: "国語",
      情報: "情報",
      その他: "その他"
    },
    subjectShort: {
      数学: "数",
      英語: "英",
      物理: "物",
      化学: "化",
      国語: "国",
      情報: "情",
      その他: "他"
    },
    priorities: {
      高: "高",
      普通: "普通",
      低: "低"
    },
    grades: {
      中一: "中一",
      中二: "中二",
      中三: "中三",
      高一: "高一",
      高二: "高二",
      高三: "高三",
      大学: "大学",
      その他: "その他"
    }
  },
  en: {
    locale: "en-US",
    htmlLang: "en",
    languageLabel: "Language",
    nicknameLabel: "Nickname",
    nicknamePlaceholder: "E.g. Alex / ひな / 小林 / 민지",
    gradeLabel: "Grade",
    gradePlaceholder: "E.g. Senior 3",
    avatarEmojiLabel: "Avatar",
    avatarEmojiPlaceholder: "E.g. 🐱",
    avatarColorLabel: "Color",
    setupTitle: "Set Up Your Profile",
    setupSubtitle: "Choose your language, nickname, icon, and current grade.",
    setupLanguageLabel: "Language",
    setupSave: "OK",
    defaultName: "Learner",
    viewPlan: "View Plan",
    streakWord: "streak!",
    menubar: "Menubar",
    navDashboard: "Home",
    navCourses: "Weekly Plan",
    navTimer: "Timer",
    navRecords: "Records",
    navProgress: "Progress",
    lastAccess: "Last Access Courses",
    courseMath: "Math Practice",
    courseEnglish: "English Reading",
    courseInfo: "Information Basics",
    moreCourses: "+4 more",
    welcomeTemplate: "Welcome back, {name}",
    heroStrong: "Succeed",
    heroMuted: "or grow",
    todayTasksCard: "Today's Tasks",
    focusTimeCard: "Focus Time",
    examCountdownCard: "Exam Countdown",
    examNamePlaceholder: "Exam name",
    examDateLabel: "Exam date",
    examSave: "Save",
    examTapHint: "Tap to register",
    examUnset: "--",
    daysLeft: "{days}d",
    examToday: "Today",
    examPassed: "Done",
    todayProgress: "Today Progress",
    studyTime: "Study Time",
    upcomingFocus: "Upcoming Focus",
    focusBlocks: "Focus blocks today",
    learningActivity: "Learning Activity",
    activitySubtitle: "Record subject study time and see weekly progress.",
    timeSpent: "Time Spent",
    coursesTab: "Courses",
    quizzes: "Quizzes",
    certificates: "Certificates",
    daily: "Daily",
    hrs12: "12hrs",
    hrs8: "8hrs",
    hrs4: "4hrs",
    hrs0: "0hrs",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun",
    coursesProgress: "Weekly Plan",
    planSubtitle: "Organize this week's tasks by importance and urgency.",
    contentPlaceholder: "E.g. 10 algebra problems",
    minutesPlaceholder: "Plan (min)",
    add: "Add",
    prevWeek: "Previous week",
    thisWeek: "This Week",
    nextWeek: "Next week",
    importanceLabel: "Importance",
    urgencyLabel: "Urgency",
    urgent: "Urgent",
    notUrgent: "Not urgent",
    important: "Important",
    notImportant: "Not important",
    importantUrgent: "Important & urgent",
    importantNotUrgent: "Important & not urgent",
    notImportantUrgent: "Not important & urgent",
    notImportantNotUrgent: "Not important & not urgent",
    matrixHint: "Drag tasks inside the same quadrant to change only their order.",
    nameHeader: "Name ↕",
    coachHeader: "Coach ↕",
    progressHeader: "Progress ↕",
    focusTimer: "Focus Timer",
    timerSubtitle: "Track your actual study time.",
    ready: "Ready",
    studying: "Studying",
    paused: "Paused",
    countUp: "Count up",
    countDown: "Countdown",
    countdownMinutes: "Countdown (min)",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    studyLogMinutesPlaceholder: "Study time (min)",
    studyLogAdd: "Log",
    studyLogNoMinutes: "Please enter study minutes.",
    morningReview: "Morning review",
    break9: "Break, 9am",
    focusTime: "Focus time",
    quizTime: "Quiz time, 2pm",
    workshop: "UI Design Workshop",
    learningRecords: "Learning Records",
    recordsSubtitle: "Recent study activity",
    progress: "Progress",
    last7Days: "Last 7 days",
    weekTime: "Week Time",
    streak: "Streak",
    subjectStudyTime: "Study Time by Subject",
    noTaskAlert: "Please enter study content.",
    deleteConfirm: "Delete this plan?",
    resetConfirm: "Reset today's study time?",
    deleteRecordConfirm: "Delete this day's study record?",
    emptyTasks: "No study plan for today yet.",
    emptyRecords: "No study records yet.",
    emptySubjects: "Use the timer to see study time by subject.",
    done: "done",
    minute: "min",
    hour: "h",
    priority: "Importance",
    studyCoach: "Study Coach",
    subjects: {
      数学: "Math",
      英語: "English",
      物理: "Physics",
      化学: "Chemistry",
      国語: "Japanese",
      情報: "Computer Science",
      その他: "Other"
    },
    subjectShort: {
      数学: "M",
      英語: "E",
      物理: "P",
      化学: "C",
      国語: "J",
      情報: "I",
      その他: "O"
    },
    priorities: {
      高: "High",
      普通: "Normal",
      低: "Low"
    },
    grades: {
      中一: "Middle 1",
      中二: "Middle 2",
      中三: "Middle 3",
      高一: "High 1",
      高二: "High 2",
      高三: "High 3",
      大学: "College",
      その他: "Other"
    }
  },
  zh: {
    locale: "zh-CN",
    htmlLang: "zh-Hans",
    languageLabel: "语言",
    nicknameLabel: "昵称",
    nicknamePlaceholder: "例如：Alex / ひな / 小林 / 민지",
    gradeLabel: "年级",
    gradePlaceholder: "例如：高三",
    avatarEmojiLabel: "头像",
    avatarEmojiPlaceholder: "例如：🐱",
    avatarColorLabel: "颜色",
    setupTitle: "设置个人资料",
    setupSubtitle: "选择语言、登录昵称、头像 emoji 和当前年级。",
    setupLanguageLabel: "语言",
    setupSave: "OK",
    defaultName: "同学",
    viewPlan: "查看计划",
    streakWord: "连续学习!",
    menubar: "菜单",
    navDashboard: "首页",
    navCourses: "周计划",
    navTimer: "计时器",
    navRecords: "记录",
    navProgress: "进度",
    lastAccess: "最近学习课程",
    courseMath: "数学练习",
    courseEnglish: "英语阅读",
    courseInfo: "信息基础",
    moreCourses: "+4 更多",
    welcomeTemplate: "欢迎回来，{name}",
    heroStrong: "要么成功",
    heroMuted: "要么成长",
    todayTasksCard: "今日任务",
    focusTimeCard: "专注时间",
    examCountdownCard: "考试倒计时",
    examNamePlaceholder: "考试名称",
    examDateLabel: "考试日期",
    examSave: "保存",
    examTapHint: "点击登记",
    examUnset: "--",
    daysLeft: "{days}天",
    examToday: "今天",
    examPassed: "已结束",
    todayProgress: "今日进度",
    studyTime: "学习时间",
    upcomingFocus: "待完成专注",
    focusBlocks: "今日专注任务",
    learningActivity: "学习活动",
    activitySubtitle: "记录各科目的学习时间，并查看一周进度。",
    timeSpent: "学习时长",
    coursesTab: "课程",
    quizzes: "测验",
    certificates: "证书",
    daily: "每日",
    hrs12: "12小时",
    hrs8: "8小时",
    hrs4: "4小时",
    hrs0: "0小时",
    mon: "周一",
    tue: "周二",
    wed: "周三",
    thu: "周四",
    fri: "周五",
    sat: "周六",
    sun: "周日",
    coursesProgress: "周计划",
    planSubtitle: "按重要度和紧急度整理这一周要做的事情。",
    contentPlaceholder: "例如：完成10道数学题",
    minutesPlaceholder: "计划(分钟)",
    add: "添加",
    prevWeek: "上一周",
    thisWeek: "本周",
    nextWeek: "下一周",
    importanceLabel: "重要度",
    urgencyLabel: "紧急度",
    urgent: "紧急",
    notUrgent: "不紧急",
    important: "重要",
    notImportant: "不重要",
    importantUrgent: "重要且紧急",
    importantNotUrgent: "重要但不紧急",
    notImportantUrgent: "不重要但紧急",
    notImportantNotUrgent: "不重要且不紧急",
    matrixHint: "可以在同一个象限里拖拽任务，只调整顺序。",
    nameHeader: "名称 ↕",
    coachHeader: "教练 ↕",
    progressHeader: "进度 ↕",
    focusTimer: "专注计时器",
    timerSubtitle: "记录实际学习时间。",
    ready: "准备好了",
    studying: "学习中",
    paused: "已暂停",
    countUp: "正计时",
    countDown: "倒计时",
    countdownMinutes: "倒计时(分钟)",
    start: "开始",
    pause: "暂停",
    reset: "重置",
    studyLogMinutesPlaceholder: "学习时间(分钟)",
    studyLogAdd: "记录",
    studyLogNoMinutes: "请输入学习时间。",
    morningReview: "晨间复习",
    break9: "休息，9点",
    focusTime: "专注时间",
    quizTime: "测验时间，2点",
    workshop: "UI设计工作坊",
    learningRecords: "学习记录",
    recordsSubtitle: "最近的学习情况",
    progress: "进度",
    last7Days: "过去7天",
    weekTime: "本周时长",
    streak: "连续学习",
    subjectStudyTime: "按科目统计学习时间",
    noTaskAlert: "请输入学习内容。",
    deleteConfirm: "要删除这个计划吗？",
    resetConfirm: "要重置今天的学习时间吗？",
    deleteRecordConfirm: "要删除这一天的学习记录吗？",
    emptyTasks: "今天还没有学习计划。",
    emptyRecords: "还没有学习记录。",
    emptySubjects: "使用计时器后，这里会显示各科目的学习时间。",
    done: "完成",
    minute: "分钟",
    hour: "小时",
    priority: "重要度",
    studyCoach: "学习教练",
    subjects: {
      数学: "数学",
      英語: "英语",
      物理: "物理",
      化学: "化学",
      国語: "语文",
      情報: "信息",
      その他: "其他"
    },
    subjectShort: {
      数学: "数",
      英語: "英",
      物理: "物",
      化学: "化",
      国語: "语",
      情報: "信",
      その他: "其"
    },
    priorities: {
      高: "高",
      普通: "普通",
      低: "低"
    },
    grades: {
      中一: "初一",
      中二: "初二",
      中三: "初三",
      高一: "高一",
      高二: "高二",
      高三: "高三",
      大学: "大学",
      その他: "其他"
    }
  },
  ko: {
    locale: "ko-KR",
    htmlLang: "ko",
    languageLabel: "언어",
    nicknameLabel: "닉네임",
    nicknamePlaceholder: "예: Alex / ひな / 小林 / 민지",
    gradeLabel: "학년",
    gradePlaceholder: "예: 고3",
    avatarEmojiLabel: "아바타",
    avatarEmojiPlaceholder: "예: 🐱",
    avatarColorLabel: "색상",
    setupTitle: "프로필 설정",
    setupSubtitle: "언어, 닉네임, 아이콘, 현재 학년을 등록하세요.",
    setupLanguageLabel: "언어",
    setupSave: "OK",
    defaultName: "학생",
    viewPlan: "계획 보기",
    streakWord: "연속 학습!",
    menubar: "메뉴",
    navDashboard: "홈",
    navCourses: "주간 계획",
    navTimer: "타이머",
    navRecords: "기록",
    navProgress: "진도",
    lastAccess: "최근 학습 코스",
    courseMath: "수학 연습",
    courseEnglish: "영어 리딩",
    courseInfo: "정보 기초",
    moreCourses: "+4 더보기",
    welcomeTemplate: "{name}님, 다시 오신 것을 환영합니다",
    heroStrong: "성공하거나",
    heroMuted: "성장하거나",
    todayTasksCard: "오늘의 과제",
    focusTimeCard: "집중 시간",
    examCountdownCard: "시험 카운트다운",
    examNamePlaceholder: "시험 이름",
    examDateLabel: "시험 날짜",
    examSave: "저장",
    examTapHint: "탭해서 등록",
    examUnset: "--",
    daysLeft: "{days}일",
    examToday: "오늘",
    examPassed: "종료",
    todayProgress: "오늘 진도",
    studyTime: "학습 시간",
    upcomingFocus: "남은 집중",
    focusBlocks: "오늘의 집중 블록",
    learningActivity: "학습 활동",
    activitySubtitle: "과목별 학습 시간을 기록하고 주간 진도를 확인합니다.",
    timeSpent: "사용 시간",
    coursesTab: "코스",
    quizzes: "퀴즈",
    certificates: "수료증",
    daily: "일간",
    hrs12: "12시간",
    hrs8: "8시간",
    hrs4: "4시간",
    hrs0: "0시간",
    mon: "월",
    tue: "화",
    wed: "수",
    thu: "목",
    fri: "금",
    sat: "토",
    sun: "일",
    coursesProgress: "주간 계획",
    planSubtitle: "이번 주 할 일을 중요도와 긴급도로 정리하세요.",
    contentPlaceholder: "예: 수학 문제 10개 풀기",
    minutesPlaceholder: "계획(분)",
    add: "추가",
    prevWeek: "지난주",
    thisWeek: "이번 주",
    nextWeek: "다음 주",
    importanceLabel: "중요도",
    urgencyLabel: "긴급도",
    urgent: "긴급",
    notUrgent: "긴급하지 않음",
    important: "중요",
    notImportant: "중요하지 않음",
    importantUrgent: "중요하고 긴급",
    importantNotUrgent: "중요하지만 긴급하지 않음",
    notImportantUrgent: "중요하지 않지만 긴급",
    notImportantNotUrgent: "중요하지 않고 긴급하지 않음",
    matrixHint: "같은 사분면 안에서 드래그하여 순서만 바꿀 수 있습니다.",
    nameHeader: "이름 ↕",
    coachHeader: "코치 ↕",
    progressHeader: "진도 ↕",
    focusTimer: "집중 타이머",
    timerSubtitle: "실제 학습 시간을 기록합니다.",
    ready: "준비 완료",
    studying: "학습 중",
    paused: "일시 정지",
    countUp: "스톱워치",
    countDown: "카운트다운",
    countdownMinutes: "카운트다운(분)",
    start: "시작",
    pause: "일시 정지",
    reset: "초기화",
    studyLogMinutesPlaceholder: "학습 시간(분)",
    studyLogAdd: "기록",
    studyLogNoMinutes: "학습 시간을 입력해 주세요.",
    morningReview: "아침 복습",
    break9: "휴식, 9시",
    focusTime: "집중 시간",
    quizTime: "퀴즈 시간, 2시",
    workshop: "UI 디자인 워크숍",
    learningRecords: "학습 기록",
    recordsSubtitle: "최근 학습 현황",
    progress: "진도",
    last7Days: "최근 7일",
    weekTime: "주간 시간",
    streak: "연속 학습",
    subjectStudyTime: "과목별 학습 시간",
    noTaskAlert: "학습 내용을 입력해 주세요.",
    deleteConfirm: "이 계획을 삭제할까요?",
    resetConfirm: "오늘의 학습 시간을 초기화할까요?",
    deleteRecordConfirm: "이 날의 학습 기록을 삭제할까요?",
    emptyTasks: "오늘의 학습 계획이 아직 없습니다.",
    emptyRecords: "아직 학습 기록이 없습니다.",
    emptySubjects: "타이머를 사용하면 과목별 학습 시간이 표시됩니다.",
    done: "완료",
    minute: "분",
    hour: "시간",
    priority: "중요도",
    studyCoach: "학습 코치",
    subjects: {
      数学: "수학",
      英語: "영어",
      物理: "물리",
      化学: "화학",
      国語: "국어",
      情報: "정보",
      その他: "기타"
    },
    subjectShort: {
      数学: "수",
      英語: "영",
      物理: "물",
      化学: "화",
      国語: "국",
      情報: "정",
      その他: "기"
    },
    priorities: {
      高: "높음",
      普通: "보통",
      低: "낮음"
    },
    grades: {
      中一: "중1",
      中二: "중2",
      中三: "중3",
      高一: "고1",
      高二: "고2",
      高三: "고3",
      大学: "대학",
      その他: "기타"
    }
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
if (!I18N[currentLanguage]) currentLanguage = "en";
let currentNickname = localStorage.getItem(NICKNAME_KEY) || "";
let currentGrade = localStorage.getItem(GRADE_KEY) || "高三";
let currentAvatarEmoji = localStorage.getItem(AVATAR_EMOJI_KEY) || "🐱";
let currentAvatarColor = localStorage.getItem(AVATAR_COLOR_KEY) || "#f6e6ce";

function t(key) {
  return I18N[currentLanguage][key] || I18N.ja[key] || key;
}

function dateKey(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function parseDate(value) {
  if (value instanceof Date) return new Date(value);
  const [year, month, day] = String(value).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function weekStartKey(value = new Date()) {
  const date = parseDate(value);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  return dateKey(date);
}

const today = dateKey();
let selectedWeekStart = weekStartKey(today);
const taskKey = date => `studyflow_tasks_${date}`;
const weekTaskKey = weekStart => `studyflow_week_tasks_${weekStart}`;
const timeKey = date => `studyflow_time_${date}`;
const subjectKey = date => `studyflow_subject_${date}`;

let seconds = Number(localStorage.getItem(timeKey(today))) || 0;
let timer = null;
let timerMode = "countup";
let countdownRemaining = 0;

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function legacyTaskToWeekTask(task, index = 0) {
  const priority = task.priority || "普通";
  const importance = task.importance || (priority === "高" ? "important" : "notImportant");
  const urgency = task.urgency || (priority === "低" ? "notUrgent" : "urgent");

  return {
    ...task,
    importance,
    urgency,
    order: Number.isFinite(task.order) ? task.order : index
  };
}

function getTasks(date = selectedWeekStart) {
  const weekStart = weekStartKey(date);
  const stored = readJSON(weekTaskKey(weekStart), null);

  if (stored) return stored.map(legacyTaskToWeekTask);

  const legacy = readJSON(taskKey(date), []);
  if (legacy.length === 0) return [];

  const migrated = legacy.map(legacyTaskToWeekTask);
  localStorage.setItem(weekTaskKey(weekStart), JSON.stringify(migrated));
  return migrated;
}

function saveTasks(tasks, date = selectedWeekStart) {
  localStorage.setItem(weekTaskKey(weekStartKey(date)), JSON.stringify(tasks));
  refresh();
}

function getSubjects(date = today) {
  return readJSON(subjectKey(date), {});
}

function saveSubjects(data) {
  localStorage.setItem(subjectKey(today), JSON.stringify(data));
}

function subjectSecondsTotal(date = today) {
  return Object.values(getSubjects(date))
    .reduce((sum, value) => sum + Number(value || 0), 0);
}

function recordedStudySeconds(date = today) {
  const subjectSeconds = subjectSecondsTotal(date);
  const storedSeconds = Number(localStorage.getItem(timeKey(date))) || 0;
  return subjectSeconds > 0 ? subjectSeconds : storedSeconds;
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = String(value);
  return div.innerHTML;
}

function subjectLabel(subject) {
  return I18N[currentLanguage].subjects[subject] || subject;
}

function subjectShort(subject) {
  return I18N[currentLanguage].subjectShort[subject] || subject.slice(0, 1);
}

function priorityLabel(priority) {
  return I18N[currentLanguage].priorities[priority] || priority;
}

function importanceLabel(value) {
  return t(value);
}

function urgencyLabel(value) {
  return t(value);
}

function displayName() {
  return currentNickname.trim() || t("defaultName");
}

function updateProfileName() {
  const name = displayName();
  if ($("profileName")) {
    $("profileName").textContent = currentLanguage === "ja"
      ? `${name} さん`
      : currentLanguage === "zh"
        ? `${name} 同学`
        : currentLanguage === "ko"
          ? `${name} 학생`
          : name;
  }

  if ($("welcomeText")) {
    $("welcomeText").textContent = t("welcomeTemplate").replace("{name}", name);
  }

  if ($("nicknameInput")) {
    $("nicknameInput").value = currentNickname;
  }

  if ($("gradeInput")) {
    $("gradeInput").value = currentGrade;
  }

  if ($("setupNicknameInput")) {
    $("setupNicknameInput").value = currentNickname;
  }

  if ($("setupGradeInput")) {
    $("setupGradeInput").value = currentGrade;
  }

  if ($("setupLanguageSelect")) {
    $("setupLanguageSelect").value = currentLanguage;
  }
}

function updateAvatar() {
  const emoji = currentAvatarEmoji.trim() || "🐱";
  const color = currentAvatarColor || "#f6e6ce";

  if ($("avatarPreview")) {
    $("avatarPreview").textContent = emoji;
    $("avatarPreview").style.setProperty("--avatar-color", color);
  }

  if ($("avatarEmojiInput")) {
    renderEmojiPicker("avatarEmojiInput");
  }

  if ($("setupAvatarEmojiInput")) {
    renderEmojiPicker("setupAvatarEmojiInput");
  }

  if ($("avatarColorInput")) {
    $("avatarColorInput").value = color;
  }
}

function renderSelectOptions(selectId, values, labels) {
  const select = $(selectId);
  if (!select) return;

  const selected = select.value || values[0];
  select.innerHTML = values.map(value => (
    `<option value="${escapeHTML(value)}">${escapeHTML(labels[value] || value)}</option>`
  )).join("");
  select.value = values.includes(selected) ? selected : values[0];
}

function renderEmojiPicker(pickerId) {
  const picker = $(pickerId);
  if (!picker) return;

  picker.innerHTML = AVATAR_OPTIONS.map(emoji => `
    <button
      class="${emoji === currentAvatarEmoji ? "selected" : ""}"
      type="button"
      role="radio"
      aria-checked="${emoji === currentAvatarEmoji}"
      data-emoji="${emoji}"
    >${emoji}</button>
  `).join("");
}

function chooseAvatar(emoji) {
  currentAvatarEmoji = emoji;
  localStorage.setItem(AVATAR_EMOJI_KEY, currentAvatarEmoji);
  updateAvatar();
}

function handleAvatarPickerPress(event) {
  const target = event.target.nodeType === Node.TEXT_NODE
    ? event.target.parentElement
    : event.target;
  const button = target?.closest("button[data-emoji]");
  if (!button) return;

  event.preventDefault();
  chooseAvatar(button.dataset.emoji);
}

function showProfileSetupIfNeeded() {
  const panel = $("profileSetup");
  if (!panel || localStorage.getItem(PROFILE_SETUP_KEY)) return;

  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  $("setupNicknameInput")?.focus();
}

function closeProfileSetup() {
  const panel = $("profileSetup");
  if (!panel) return;

  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
}

function saveProfileSetup() {
  currentLanguage = $("setupLanguageSelect")?.value || currentLanguage || "en";
  currentNickname = $("setupNicknameInput")?.value.trim() || "";
  currentAvatarEmoji = currentAvatarEmoji || "🐱";
  currentGrade = $("setupGradeInput")?.value || currentGrade || "高三";

  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  localStorage.setItem(NICKNAME_KEY, currentNickname);
  localStorage.setItem(AVATAR_EMOJI_KEY, currentAvatarEmoji);
  localStorage.setItem(GRADE_KEY, currentGrade);
  localStorage.setItem(PROFILE_SETUP_KEY, "true");

  updateProfileName();
  updateAvatar();
  applyTranslations();
  refresh();
  closeProfileSetup();
}

function setTimerState(state) {
  const stateEl = $("timerState");
  if (!stateEl) return;
  stateEl.dataset.state = state;
  stateEl.textContent = t(state);
}

function applyTranslations() {
  document.documentElement.lang = I18N[currentLanguage].htmlLang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  if ($("languageSelect")) $("languageSelect").value = currentLanguage;
  if ($("setupLanguageSelect")) $("setupLanguageSelect").value = currentLanguage;

  renderSelectOptions("subject", SUBJECTS, I18N[currentLanguage].subjects);
  renderSelectOptions("studyLogSubject", SUBJECTS, I18N[currentLanguage].subjects);
  renderSelectOptions("gradeInput", GRADE_OPTIONS, I18N[currentLanguage].grades);
  renderSelectOptions("setupGradeInput", GRADE_OPTIONS, I18N[currentLanguage].grades);
  renderSelectOptions("importance", IMPORTANCE_LEVELS, {
    important: t("important"),
    notImportant: t("notImportant")
  });
  renderSelectOptions("urgency", URGENCY_LEVELS, {
    urgent: t("urgent"),
    notUrgent: t("notUrgent")
  });

  setTimerState($("timerState")?.dataset.state || "ready");
  updateProfileName();
  updateAvatar();
  showDate();
}

function addTask() {
  const content = $("content")?.value.trim();

  if (!content) {
    alert(t("noTaskAlert"));
    return;
  }

  const tasks = getTasks();
  const quadrantTasks = tasks.filter(task => (
    task.importance === ($("importance")?.value || "important") &&
    task.urgency === ($("urgency")?.value || "urgent")
  ));

  tasks.push({
    id: Date.now(),
    subject: $("subject")?.value || "その他",
    name: content,
    minutes: Number($("minutes")?.value) || 0,
    importance: $("importance")?.value || "important",
    urgency: $("urgency")?.value || "urgent",
    done: false,
    order: quadrantTasks.length
  });

  $("content").value = "";
  $("minutes").value = "";
  saveTasks(tasks);
}

function toggleTask(id) {
  const tasks = getTasks();
  const task = tasks.find(item => item.id === id);
  if (task) task.done = !task.done;
  saveTasks(tasks);
}

function removeTask(id) {
  if (!confirm(t("deleteConfirm"))) return;
  saveTasks(getTasks().filter(item => item.id !== id));
}

function addStudyLog() {
  const subject = $("studyLogSubject")?.value || "その他";
  const minutes = Number($("studyLogMinutes")?.value || 0);

  if (minutes <= 0) {
    alert(t("studyLogNoMinutes"));
    $("studyLogMinutes")?.focus();
    return;
  }

  const addedSeconds = Math.round(minutes * 60);
  seconds = recordedStudySeconds(today) + addedSeconds;
  localStorage.setItem(timeKey(today), String(seconds));

  const subjects = getSubjects();
  subjects[subject] = Number(subjects[subject] || 0) + addedSeconds;
  saveSubjects(subjects);

  $("studyLogMinutes").value = "";
  refresh();
}

function renderTasks() {
  const container = $("tasks");
  if (!container) return;

  updatePlanWeekLabel();
  const tasks = getTasks()
    .map(legacyTaskToWeekTask)
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

  if (tasks.length === 0) {
    container.innerHTML = renderQuadrants(tasks);
    return;
  }

  container.innerHTML = renderQuadrants(tasks);
}

function quadrantDefinitions() {
  return [
    ["important", "urgent", "importantUrgent"],
    ["important", "notUrgent", "importantNotUrgent"],
    ["notImportant", "urgent", "notImportantUrgent"],
    ["notImportant", "notUrgent", "notImportantNotUrgent"]
  ];
}

function renderQuadrants(tasks) {
  const quadrants = quadrantDefinitions().map(([importance, urgency, titleKey]) => {
    const quadrantTasks = tasks.filter(task => task.importance === importance && task.urgency === urgency);
    const body = quadrantTasks.length
      ? quadrantTasks.map(renderTaskCard).join("")
      : `<div class="quadrant-empty">${escapeHTML(t("emptyTasks"))}</div>`;

    return `
      <section
        class="quadrant ${importance}-${urgency}"
        data-importance="${importance}"
        data-urgency="${urgency}"
        ondragover="allowTaskDrop(event)"
        ondrop="dropTaskInQuadrant(event, '${importance}', '${urgency}')"
      >
        <header>
          <strong>${escapeHTML(t(titleKey))}</strong>
          <span>${quadrantTasks.length}</span>
        </header>
        <div class="quadrant-list">
          ${body}
        </div>
      </section>
    `;
  }).join("");

  return `
    <span class="matrix-axis matrix-axis-y" aria-hidden="true"></span>
    <span class="matrix-axis matrix-axis-x" aria-hidden="true"></span>
    <span class="matrix-label matrix-label-top">${escapeHTML(t("important"))}</span>
    <span class="matrix-label matrix-label-bottom">${escapeHTML(t("notImportant"))}</span>
    <span class="matrix-label matrix-label-left">${escapeHTML(t("notUrgent"))}</span>
    <span class="matrix-label matrix-label-right">${escapeHTML(t("urgent"))}</span>
    ${quadrants}
  `;
}

function renderTaskCard(task) {
  return `
    <article
      class="task-card ${task.done ? "done" : ""}"
      draggable="true"
      data-task-id="${task.id}"
      ondragstart="startTaskDrag(event, ${task.id})"
      ondragover="allowTaskDrop(event)"
      ondrop="dropTaskOnTask(event, ${task.id})"
    >
      <span class="drag-handle">☰</span>
      <label class="task-name">
        <input class="task-check" type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${task.id})">
        <span class="task-title">
          <strong>${escapeHTML(task.name)}</strong>
          <small>${escapeHTML(subjectLabel(task.subject))} ・ ${task.minutes || 0}${escapeHTML(t("minute"))} ・ ${escapeHTML(importanceLabel(task.importance))} ・ ${escapeHTML(urgencyLabel(task.urgency))}</small>
        </span>
      </label>
      <button class="delete-btn" onclick="removeTask(${task.id})" aria-label="${escapeHTML(t("deleteConfirm"))}">×</button>
    </article>
  `;
}

function formatClock(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return [hours, minutes, secs].map(value => String(value).padStart(2, "0")).join(":");
}

function humanTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (currentLanguage === "en") {
    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  }

  return hours > 0
    ? `${hours}${t("hour")}${minutes}${t("minute")}`
    : `${minutes}${t("minute")}`;
}

function compactTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function formatMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (currentLanguage === "en") {
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
  }

  return hours > 0
    ? `${hours}${t("hour")}${mins}${t("minute")}`
    : `${mins}${t("minute")}`;
}

function setTimerMode(mode) {
  if (timer) pauseTimer();
  timerMode = mode;
  countdownRemaining = 0;

  $("countUpMode")?.classList.toggle("active", mode === "countup");
  $("countDownMode")?.classList.toggle("active", mode === "countdown");
  $("countdownField")?.classList.toggle("show", mode === "countdown");
  setTimerState("ready");
  updateClock();
}

function startTimer() {
  if (timer) return;

  setTimerState("studying");

  if (timerMode === "countdown" && countdownRemaining <= 0) {
    countdownRemaining = Math.max(1, Number($("countdownMinutes")?.value || 25)) * 60;
    updateClock();
  }

  timer = setInterval(() => {
    if (timerMode === "countdown") {
      countdownRemaining = Math.max(0, countdownRemaining - 1);
      if (countdownRemaining === 0) {
        pauseTimer();
        setTimerState("ready");
      }
    } else {
      seconds += 1;
      localStorage.setItem(timeKey(today), String(seconds));
    }

    updateClock();
    if (timerMode === "countup" && seconds % 10 === 0) refresh(false);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
  setTimerState("paused");
  refresh();
}

function resetTimer() {
  if (!confirm(t("resetConfirm"))) return;

  clearInterval(timer);
  timer = null;
  if (timerMode === "countdown") {
    countdownRemaining = 0;
  } else {
    seconds = 0;
    localStorage.setItem(timeKey(today), "0");
  }
  setTimerState("ready");
  refresh();
}

function updateClock() {
  if (timerMode === "countdown") {
    $("clock").textContent = formatClock(countdownRemaining || Math.max(1, Number($("countdownMinutes")?.value || 25)) * 60);
    return;
  }

  if (!timer) {
    seconds = recordedStudySeconds(today);
  }

  $("clock").textContent = formatClock(seconds);
  if ($("studied")) $("studied").textContent = humanTime(recordedStudySeconds(today));
}

function lastDays(count) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return dateKey(date);
  });
}

function calculateStreak() {
  let streak = 0;

  for (let index = 0; index < 365; index++) {
    const date = new Date();
    date.setDate(date.getDate() - index);
    const key = dateKey(date);
    const studied = recordedStudySeconds(key) > 0;

    if (!studied) break;
    streak += 1;
  }

  return streak;
}

function streakUnit() {
  if (currentLanguage === "en") return "d";
  if (currentLanguage === "zh") return "天";
  if (currentLanguage === "ko") return "일";
  return "日";
}

function hasStudiedOn(date) {
  return recordedStudySeconds(date) > 0;
}

function renderStreakCalendar() {
  const calendar = $("streakCalendar");
  if (!calendar) return;

  calendar.innerHTML = lastDays(7).reverse().map(key => {
    const date = new Date(`${key}T00:00:00`);
    const day = date.getDate();
    const studied = hasStudiedOn(key);

    return `
      <div class="streak-day ${studied ? "studied" : ""}">
        <time datetime="${key}">${day}</time>
        <span>${studied ? "★" : "・"}</span>
      </div>
    `;
  }).join("");
}

function updateSummary() {
  const tasks = getTasks();
  const completed = tasks.filter(task => task.done).length;
  const rate = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const planned = tasks.reduce((sum, task) => sum + Number(task.minutes || 0), 0);

  if ($("rate")) $("rate").textContent = `${rate}%`;
  if ($("done")) $("done").textContent = `${completed} / ${tasks.length} ${t("done")}`;
  if ($("planned")) $("planned").textContent = formatMinutes(planned);
  if ($("progress")) $("progress").style.width = `${rate}%`;
  if ($("studied")) $("studied").textContent = humanTime(recordedStudySeconds(today));
  if ($("todayTaskStat")) $("todayTaskStat").textContent = `${completed} / ${tasks.length}`;
  if ($("focusTimeStat")) $("focusTimeStat").textContent = compactTime(recordedStudySeconds(today));
  $("streakTop").textContent = `${calculateStreak()}${streakUnit()}`;
  renderStreakCalendar();
  renderExamCountdown();
}

function renderHistory() {
  const container = $("historyBox");
  if (!container) return;

  const records = lastDays(7).map(key => {
    const tasks = getTasks(key);
    const done = tasks.filter(task => task.done).length;
    const total = tasks.length;
    const rate = total ? Math.round((done / total) * 100) : 0;
    const studiedSeconds = recordedStudySeconds(key);
    return { key, done, total, rate, studiedSeconds };
  }).filter(record => record.total || record.studiedSeconds);

  if (records.length === 0) {
    container.innerHTML = `<div class="empty">${escapeHTML(t("emptyRecords"))}</div>`;
    return;
  }

  container.innerHTML = records.map(record => `
    <article class="record">
      <div class="record-top">
        <span>${formatRecordDate(record.key)}</span>
        <span>${record.rate}%</span>
      </div>
      <div class="record-info">
        <span>${record.done}/${record.total} ${escapeHTML(t("done"))} ・ ${escapeHTML(humanTime(record.studiedSeconds))}</span>
        <button class="record-delete" onclick="deleteLearningRecord('${record.key}')" aria-label="${escapeHTML(t("deleteRecordConfirm"))}">×</button>
      </div>
    </article>
  `).join("");
}

function deleteLearningRecord(key) {
  if (!confirm(t("deleteRecordConfirm"))) return;

  localStorage.removeItem(taskKey(key));
  localStorage.removeItem(timeKey(key));
  localStorage.removeItem(subjectKey(key));

  if (key === today) {
    seconds = 0;
    if (timer) {
      clearInterval(timer);
      timer = null;
      setTimerState("ready");
    }
  }

  refresh();
}

function renderStats() {
  let weekSeconds = 0;
  const subjectTotals = {};
  const dayRows = lastDays(7).reverse().map(key => {
    const subjectTimes = getSubjects(key);
    const subjectTotal = subjectSecondsTotal(key);
    const dayTotal = subjectTotal || recordedStudySeconds(key);

    Object.entries(subjectTimes).forEach(([subject, value]) => {
      subjectTotals[subject] = Number(subjectTotals[subject] || 0) + Number(value || 0);
    });

    return { key, subjectTimes, dayTotal };
  });

  lastDays(7).forEach(key => {
    weekSeconds += recordedStudySeconds(key);
  });

  $("weekTime").textContent = humanTime(weekSeconds);
  $("streak").textContent = $("streakTop").textContent;

  renderActivityChart(dayRows, subjectTotals);
}

function renderActivityChart(dayRows, subjectTotals) {
  const chart = $("activityChart");
  const legend = $("activityLegend");
  if (!chart || !legend) return;

  const maxDaySeconds = Math.max(3600, ...dayRows.map(row => row.dayTotal));

  chart.innerHTML = `
    <div class="chart-scale">
      <span>${escapeHTML(humanTime(maxDaySeconds))}</span>
      <span>${escapeHTML(humanTime(Math.round(maxDaySeconds * 2 / 3)))}</span>
      <span>${escapeHTML(humanTime(Math.round(maxDaySeconds / 3)))}</span>
      <span>${escapeHTML(humanTime(0))}</span>
    </div>
    ${dayRows.map(row => {
      const date = new Date(`${row.key}T00:00:00`);
      const label = date.toLocaleDateString(I18N[currentLanguage].locale, { weekday: "short" });
      const height = row.dayTotal > 0 ? Math.max(8, Math.round(row.dayTotal / maxDaySeconds * 100)) : 3;
      const segments = SUBJECTS
        .map(subject => {
          const value = Number(row.subjectTimes[subject] || 0);
          if (value <= 0) return "";
          return `<i style="height:${value / row.dayTotal * 100}%;background:${SUBJECT_COLORS[subject]}"></i>`;
        })
        .join("");

      return `
        <div class="stacked-day">
          <div class="stacked-bar" style="height:${height}%">
            ${segments || "<i class=\"empty-segment\"></i>"}
          </div>
          <b>${escapeHTML(label)}</b>
        </div>
      `;
    }).join("")}
  `;

  const entries = Object.entries(subjectTotals)
    .filter(([, secondsValue]) => Number(secondsValue) > 0)
    .sort((a, b) => b[1] - a[1]);

  legend.innerHTML = entries.length
    ? entries.map(([subject, secondsValue]) => `
        <span><i style="background:${SUBJECT_COLORS[subject]}"></i>${escapeHTML(subjectLabel(subject))} ${escapeHTML(humanTime(secondsValue))}</span>
      `).join("")
    : `<div class="empty compact-empty">${escapeHTML(t("emptySubjects"))}</div>`;
}

function formatRecordDate(key) {
  const date = new Date(`${key}T00:00:00`);
  return date.toLocaleDateString(I18N[currentLanguage].locale, {
    month: "short",
    day: "numeric"
  });
}

function toggleExamForm() {
  const form = $("examForm");
  if (!form) return;
  form.classList.toggle("open");

  if (form.classList.contains("open")) {
    $("examNameInput")?.focus();
  }
}

function saveExamInfo() {
  const name = $("examNameInput")?.value.trim() || t("examCountdownCard");
  const date = $("examDateInput")?.value || "";

  if (!date) {
    $("examDateInput")?.focus();
    return;
  }

  localStorage.setItem(EXAM_NAME_KEY, name);
  localStorage.setItem(EXAM_DATE_KEY, date);
  $("examForm")?.classList.remove("open");
  renderExamCountdown();
}

function examDaysLeft(dateValue) {
  const target = parseDate(dateValue);
  const current = parseDate(today);
  const diff = target.getTime() - current.getTime();
  return Math.ceil(diff / 86400000);
}

function renderExamCountdown() {
  const title = $("examCardTitle");
  const value = $("examCountdownStat");
  if (!title || !value) return;

  const name = localStorage.getItem(EXAM_NAME_KEY) || t("examCountdownCard");
  const date = localStorage.getItem(EXAM_DATE_KEY) || "";

  if ($("examNameInput")) $("examNameInput").value = localStorage.getItem(EXAM_NAME_KEY) || "";
  if ($("examDateInput")) $("examDateInput").value = date;

  title.textContent = name;

  if (!date) {
    value.textContent = t("examUnset");
    return;
  }

  const days = examDaysLeft(date);
  if (days < 0) {
    value.textContent = t("examPassed");
  } else if (days === 0) {
    value.textContent = t("examToday");
  } else {
    value.textContent = t("daysLeft").replace("{days}", days);
  }
}

function formatWeekRange(weekStart) {
  const start = parseDate(weekStart);
  const end = parseDate(weekStart);
  end.setDate(end.getDate() + 6);
  const options = { month: "short", day: "numeric" };
  return `${start.toLocaleDateString(I18N[currentLanguage].locale, options)} - ${end.toLocaleDateString(I18N[currentLanguage].locale, options)}`;
}

function updatePlanWeekLabel() {
  if ($("planWeekLabel")) $("planWeekLabel").textContent = formatWeekRange(selectedWeekStart);
}

function changePlanWeek(offset) {
  const date = parseDate(selectedWeekStart);
  date.setDate(date.getDate() + offset * 7);
  selectedWeekStart = weekStartKey(date);
  refresh();
}

function goToCurrentWeek() {
  selectedWeekStart = weekStartKey(today);
  refresh();
}

function startTaskDrag(event, id) {
  event.dataTransfer.setData("text/plain", String(id));
  event.dataTransfer.effectAllowed = "move";
}

function allowTaskDrop(event) {
  event.preventDefault();
}

function dropTaskOnTask(event, targetId) {
  event.preventDefault();
  const sourceId = Number(event.dataTransfer.getData("text/plain"));
  if (!sourceId || sourceId === targetId) return;

  const tasks = getTasks();
  const source = tasks.find(task => task.id === sourceId);
  const target = tasks.find(task => task.id === targetId);
  if (!source || !target) return;
  if (source.importance !== target.importance || source.urgency !== target.urgency) return;

  reorderTasksWithinQuadrant(tasks, sourceId, targetId);
}

function dropTaskInQuadrant(event, importance, urgency) {
  event.preventDefault();
  if (event.target.closest(".task-card")) return;

  const sourceId = Number(event.dataTransfer.getData("text/plain"));
  const tasks = getTasks();
  const source = tasks.find(task => task.id === sourceId);
  if (!source || source.importance !== importance || source.urgency !== urgency) return;

  reorderTasksWithinQuadrant(tasks, sourceId, null);
}

function reorderTasksWithinQuadrant(tasks, sourceId, targetId) {
  const source = tasks.find(task => task.id === sourceId);
  const quadrantTasks = tasks
    .filter(task => task.importance === source.importance && task.urgency === source.urgency)
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

  const sourceIndex = quadrantTasks.findIndex(task => task.id === sourceId);
  const [moved] = quadrantTasks.splice(sourceIndex, 1);
  const targetIndex = targetId
    ? quadrantTasks.findIndex(task => task.id === targetId)
    : quadrantTasks.length;

  quadrantTasks.splice(Math.max(0, targetIndex), 0, moved);
  quadrantTasks.forEach((task, index) => {
    task.order = index;
  });

  saveTasks(tasks);
}

function showDate() {
  if (!$("date")) return;
  $("date").textContent = new Date().toLocaleDateString(I18N[currentLanguage].locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  });
}

function refresh(renderTaskList = true) {
  if (renderTaskList) renderTasks();
  updateSummary();
  updateClock();
  renderHistory();
  renderStats();
}

function setActiveNav(sectionId) {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
  });
}

function updateActiveNavFromScroll() {
  const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length === 0) return;

  const checkpoint = window.innerHeight * 0.34;
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top <= checkpoint ? section : active;
  }, sections[0]);

  setActiveNav(current.id);
}

function setupNavigationHighlight() {
  document.querySelectorAll(".nav-links a[href^='#']").forEach(link => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("href").slice(1);
      setActiveNav(sectionId);
    });
  });

  window.addEventListener("hashchange", () => {
    const sectionId = location.hash.slice(1);
    if (sectionId) setActiveNav(sectionId);
  });

  window.addEventListener("scroll", updateActiveNavFromScroll, { passive: true });

  const initialSection = location.hash.slice(1);
  if (initialSection) {
    setActiveNav(initialSection);
  } else {
    updateActiveNavFromScroll();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  refresh();
  setupNavigationHighlight();

  $("languageSelect")?.addEventListener("change", event => {
    currentLanguage = event.target.value;
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyTranslations();
    refresh();
  });

  $("setupLanguageSelect")?.addEventListener("change", event => {
    currentLanguage = event.target.value;
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyTranslations();
    refresh();
  });

  $("nicknameInput")?.addEventListener("input", event => {
    currentNickname = event.target.value.trim();
    localStorage.setItem(NICKNAME_KEY, currentNickname);
    updateProfileName();
  });

  $("gradeInput")?.addEventListener("change", event => {
    currentGrade = event.target.value.trim();
    localStorage.setItem(GRADE_KEY, currentGrade);
    updateProfileName();
  });

  ["avatarEmojiInput", "setupAvatarEmojiInput"].forEach(pickerId => {
    const picker = $(pickerId);
    if (!picker) return;
    picker.addEventListener("pointerdown", handleAvatarPickerPress);
    picker.addEventListener("click", handleAvatarPickerPress);
  });

  $("avatarColorInput")?.addEventListener("input", event => {
    currentAvatarColor = event.target.value;
    localStorage.setItem(AVATAR_COLOR_KEY, currentAvatarColor);
    updateAvatar();
  });

  $("content")?.addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
  });

  $("countdownMinutes")?.addEventListener("input", () => {
    if (timerMode === "countdown" && !timer) {
      countdownRemaining = 0;
      updateClock();
    }
  });

  $("examNameInput")?.addEventListener("input", event => {
    const name = event.target.value.trim();
    if ($("examCardTitle")) $("examCardTitle").textContent = name || t("examCountdownCard");
  });

  showProfileSetupIfNeeded();
});
