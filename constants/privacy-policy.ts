export interface PolicyListItem {
  text: string
}

export interface PolicySubsection {
  number: string
  title: string
  intro?: string
  items?: PolicyListItem[]
  paragraphs?: string[]
}

export interface PolicyListGroup {
  intro?: string
  items: PolicyListItem[]
}

export interface PolicySection {
  number: number
  title: string
  paragraphs?: string[]
  closingParagraphs?: string[]
  items?: PolicyListItem[]
  listGroups?: PolicyListGroup[]
  subsections?: PolicySubsection[]
}

export const privacyPolicyMeta = {
  title: 'FarmBlock Privacy Policy',
  effectiveDate: '1st Jan, 2026',
  lastUpdated: '13th May, 2026',
}

export const privacyPolicySections: PolicySection[] = [
  {
    number: 1,
    title: 'Introduction',
    paragraphs: [
      'FarmBlock (“FarmBlock”, “we”, “our”, or “us”) is a technology-integrated agriculture platform operating in Vietnam, focused on agricultural operations, land management visibility, environmental monitoring, and digital infrastructure for high-tech farming.',
      'This Privacy Policy explains how FarmBlock collects, uses, stores, shares, and protects personal information when you:',
    ],
    items: [
      { text: 'Access or use the FarmBlock website, applications, dashboards, or services;' },
      { text: 'Interact with FarmBlock as a landowner, investor, partner, customer, or website visitor;' },
      { text: 'Communicate with us through online or offline channels.' },
    ],
    closingParagraphs: [
      'By accessing or using FarmBlock’s services, you acknowledge that you have read and understood this Privacy Policy.',
    ],
  },
  {
    number: 2,
    title: 'Scope of Application',
    paragraphs: ['This Privacy Policy applies to:'],
    items: [
      { text: 'The FarmBlock website;' },
      { text: 'Mobile applications and dashboards;' },
      { text: 'Farm monitoring systems;' },
      { text: 'IoT-connected agricultural infrastructure;' },
      { text: 'Customer support and communication channels;' },
      { text: 'NFC onboarding and digital ownership activation systems;' },
      { text: 'Any related FarmBlock-operated digital services.' },
    ],
  },
  {
    number: 3,
    title: 'Information We Collect',
    subsections: [
      {
        number: '3.1',
        title: 'Personal Information',
        intro: 'We may collect personal information including:',
        items: [
          { text: 'Full name;' },
          { text: 'Phone number;' },
          { text: 'Email address;' },
          { text: 'Mailing or billing address;' },
          { text: 'National identification information where legally required;' },
          { text: 'Investor or land ownership-related information;' },
          { text: 'Account credentials and authentication data.' },
        ],
      },
      {
        number: '3.2',
        title: 'Operational & Platform Data',
        intro: 'When you use FarmBlock services, we may collect:',
        items: [
          { text: 'Plot ownership or management information;' },
          { text: 'Farming activity logs;' },
          { text: 'Operational records;' },
          { text: 'Dashboard usage data;' },
          { text: 'Financial transaction records related to platform services;' },
          { text: 'Communications with FarmBlock support teams.' },
        ],
      },
      {
        number: '3.3',
        title: 'Device & Technical Information',
        intro: 'We may automatically collect:',
        items: [
          { text: 'IP address;' },
          { text: 'Device identifiers;' },
          { text: 'Browser type;' },
          { text: 'Operating system;' },
          { text: 'Access timestamps;' },
          { text: 'Log files;' },
          { text: 'Mobile application analytics;' },
          { text: 'Geolocation data where enabled.' },
        ],
      },
      {
        number: '3.4',
        title: 'Sensor & Agricultural Monitoring Data',
        intro: 'FarmBlock operates environmental and monitoring systems across farms, including:',
        items: [
          { text: 'Soil humidity;' },
          { text: 'Temperature;' },
          { text: 'Wind speed;' },
          { text: 'Water-related metrics;' },
          { text: 'Environmental sensor readings;' },
          { text: 'Camera and observation systems.' },
        ],
        paragraphs: [
          'Such data may be associated with specific plots, operational zones, or user-linked agricultural assets.',
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'How We Use Information',
    paragraphs: ['We use collected information to:'],
    items: [
      { text: 'Provide and operate FarmBlock services;' },
      { text: 'Manage user accounts and authentication;' },
      { text: 'Enable land and plot monitoring;' },
      { text: 'Operate environmental dashboards and analytics;' },
      { text: 'Improve agricultural operations and infrastructure;' },
      { text: 'Provide customer support;' },
      { text: 'Facilitate onboarding and NFC-based ownership activation;' },
      { text: 'Send service notifications and updates;' },
      { text: 'Improve platform security and fraud prevention;' },
      { text: 'Comply with legal and regulatory obligations;' },
      { text: 'Conduct internal analytics and operational research.' },
    ],
    closingParagraphs: [
      'FarmBlock’s current operational focus includes building governance and agricultural data infrastructure to improve transparency and operational decision-making.',
    ],
  },
  {
    number: 5,
    title: 'Legal Basis for Processing',
    paragraphs: ['Where applicable under relevant laws, FarmBlock processes personal data based on:'],
    items: [
      { text: 'User consent;' },
      { text: 'Contractual necessity;' },
      { text: 'Compliance with legal obligations;' },
      { text: 'Legitimate business interests;' },
      { text: 'Protection of users, operations, and platform security.' },
    ],
  },
  {
    number: 6,
    title: 'Data Sharing & Disclosure',
    paragraphs: ['FarmBlock does not sell personal information.', 'We may share information with:'],
    items: [
      { text: 'Authorized service providers and infrastructure partners;' },
      { text: 'Agricultural technology partners;' },
      { text: 'Cloud hosting and analytics providers;' },
      { text: 'Legal, regulatory, or governmental authorities where required by law;' },
      { text: 'Professional advisors, auditors, or compliance providers;' },
      { text: 'Operational partners supporting farm management services.' },
    ],
    closingParagraphs: [
      'Information is shared only when necessary for operational, contractual, legal, or security purposes.',
    ],
  },
  {
    number: 7,
    title: 'Data Security',
    paragraphs: [
      'FarmBlock implements commercially reasonable technical and organizational security measures designed to protect information against:',
    ],
    listGroups: [
      {
        items: [
          { text: 'Unauthorized access;' },
          { text: 'Loss or theft;' },
          { text: 'Misuse;' },
          { text: 'Disclosure;' },
          { text: 'Alteration or destruction.' },
        ],
      },
      {
        intro: 'Security measures may include:',
        items: [
          { text: 'Access controls;' },
          { text: 'Encrypted communications;' },
          { text: 'Internal authorization systems;' },
          { text: 'Infrastructure monitoring;' },
          { text: 'Operational logging;' },
          { text: 'Secure cloud environments.' },
        ],
      },
    ],
    closingParagraphs: [
      'However, no digital platform or transmission method can guarantee absolute security.',
    ],
  },
  {
    number: 8,
    title: 'Data Retention',
    paragraphs: ['We retain personal information only for as long as reasonably necessary to:'],
    items: [
      { text: 'Fulfill the purposes described in this Privacy Policy;' },
      { text: 'Operate FarmBlock services;' },
      { text: 'Maintain legal and accounting records;' },
      { text: 'Resolve disputes;' },
      { text: 'Enforce agreements;' },
      { text: 'Comply with applicable laws and regulations.' },
    ],
    closingParagraphs: [
      'When data is no longer required, it may be securely deleted, anonymized, or archived.',
    ],
  },
  {
    number: 9,
    title: 'Cookies & Analytics',
    paragraphs: ['FarmBlock may use cookies, analytics tools, and similar technologies to:'],
    items: [
      { text: 'Improve website functionality;' },
      { text: 'Analyze platform usage;' },
      { text: 'Enhance performance and user experience;' },
      { text: 'Maintain security;' },
      { text: 'Remember user preferences.' },
    ],
    closingParagraphs: [
      'Users may adjust browser settings to disable cookies, though certain platform features may become limited.',
    ],
  },
  {
    number: 10,
    title: 'Third-Party Services',
    paragraphs: ['FarmBlock services may integrate with or link to third-party services, including:'],
    items: [
      { text: 'Mapping services;' },
      { text: 'Payment providers;' },
      { text: 'Analytics platforms;' },
      { text: 'Cloud infrastructure;' },
      { text: 'Video or camera streaming systems.' },
    ],
    closingParagraphs: [
      'FarmBlock is not responsible for the privacy practices of third-party services not operated by us.',
    ],
  },
  {
    number: 11,
    title: 'User Rights',
    paragraphs: ['Subject to applicable laws, users may have rights to:'],
    items: [
      { text: 'Access personal data;' },
      { text: 'Request correction of inaccurate information;' },
      { text: 'Request deletion of certain information;' },
      { text: 'Object to certain processing activities;' },
      { text: 'Withdraw consent where applicable;' },
      { text: 'Request data portability where legally supported.' },
    ],
    closingParagraphs: ['Requests may be submitted using the contact information below.'],
  },
  {
    number: 12,
    title: 'Children’s Privacy',
    paragraphs: [
      'FarmBlock services are not directed toward children under the age required by applicable law. We do not knowingly collect personal information from minors without appropriate authorization.',
    ],
  },
  {
    number: 13,
    title: 'International Data Processing',
    paragraphs: [
      'FarmBlock’s operations, technology infrastructure, or service providers may process data in multiple jurisdictions. By using our services, users acknowledge that information may be transferred, processed, and stored outside their local jurisdiction where permitted by law.',
    ],
  },
  {
    number: 14,
    title: 'Updates to This Privacy Policy',
    paragraphs: ['FarmBlock may update this Privacy Policy from time to time to reflect:'],
    items: [
      { text: 'Operational changes;' },
      { text: 'Technology updates;' },
      { text: 'Regulatory developments;' },
      { text: 'Service expansions.' },
    ],
    closingParagraphs: [
      'Updated versions will be published through official FarmBlock channels with revised effective dates.',
    ],
  },
  {
    number: 15,
    title: 'Contact Information',
    paragraphs: [
      'For questions, requests, or concerns regarding this Privacy Policy or personal data handling, please contact:',
      'FarmBlock',
    ],
    items: [
      { text: 'Website: farmblock.vn' },
      { text: 'Email: contact@farmblock.ai' },
      {
        text: 'Address: 10th Floor, Licogi 13 Building, 164 Khuat Duy Tien Street, Thanh Xuan Ward, Hanoi, Vietnam',
      },
    ],
  },
]

export const privacyPolicyViMeta = {
  title: 'Chính sách quyền riêng tư của FarmBlock',
  effectiveDate: '01/01/2026',
  lastUpdated: '13/05/2026',
}

export const privacyPolicyViSections: PolicySection[] = [
  {
    number: 1,
    title: 'Giới thiệu',
    paragraphs: [
      'FarmBlock ("FarmBlock", "chúng tôi") là nền tảng nông nghiệp tích hợp công nghệ hoạt động tại Việt Nam, tập trung vào vận hành nông nghiệp, minh bạch quản lý đất đai, giám sát môi trường và hạ tầng số cho nông nghiệp công nghệ cao.',
      'Chính sách này giải thích cách FarmBlock thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ thông tin cá nhân khi bạn:',
    ],
    items: [
      { text: 'Truy cập hoặc sử dụng website, ứng dụng, bảng điều khiển hoặc dịch vụ FarmBlock;' },
      { text: 'Tương tác với FarmBlock với tư cách chủ đất, nhà đầu tư, đối tác, khách hàng hoặc khách truy cập website;' },
      { text: 'Trao đổi với chúng tôi qua các kênh trực tuyến hoặc ngoại tuyến.' },
    ],
    closingParagraphs: [
      'Khi truy cập hoặc sử dụng dịch vụ FarmBlock, bạn xác nhận đã đọc và hiểu Chính sách quyền riêng tư này.',
    ],
  },
  {
    number: 2,
    title: 'Phạm vi áp dụng',
    paragraphs: ['Chính sách này áp dụng cho:'],
    items: [
      { text: 'Website FarmBlock;' },
      { text: 'Ứng dụng di động và bảng điều khiển;' },
      { text: 'Hệ thống giám sát nông trại;' },
      { text: 'Hạ tầng nông nghiệp kết nối IoT;' },
      { text: 'Kênh hỗ trợ khách hàng và trao đổi thông tin;' },
      { text: 'Hệ thống tiếp nhận NFC và kích hoạt quyền sở hữu số;' },
      { text: 'Các dịch vụ số liên quan do FarmBlock vận hành.' },
    ],
  },
  {
    number: 3,
    title: 'Thông tin chúng tôi thu thập',
    subsections: [
      {
        number: '3.1',
        title: 'Thông tin cá nhân',
        intro: 'Chúng tôi có thể thu thập các thông tin cá nhân gồm:',
        items: [
          { text: 'Họ và tên;' },
          { text: 'Số điện thoại;' },
          { text: 'Địa chỉ email;' },
          { text: 'Địa chỉ nhận thư hoặc thanh toán;' },
          { text: 'Thông tin giấy tờ định danh khi pháp luật yêu cầu;' },
          { text: 'Thông tin liên quan đến nhà đầu tư hoặc quyền sở hữu đất;' },
          { text: 'Thông tin đăng nhập và xác thực tài khoản.' },
        ],
      },
      {
        number: '3.2',
        title: 'Dữ liệu vận hành và nền tảng',
        intro: 'Khi bạn sử dụng dịch vụ FarmBlock, chúng tôi có thể thu thập:',
        items: [
          { text: 'Thông tin sở hữu hoặc quản lý lô đất;' },
          { text: 'Nhật ký hoạt động canh tác;' },
          { text: 'Hồ sơ vận hành;' },
          { text: 'Dữ liệu sử dụng bảng điều khiển;' },
          { text: 'Hồ sơ giao dịch tài chính liên quan đến dịch vụ nền tảng;' },
          { text: 'Trao đổi với đội ngũ hỗ trợ FarmBlock.' },
        ],
      },
      {
        number: '3.3',
        title: 'Thông tin thiết bị và kỹ thuật',
        intro: 'Chúng tôi có thể tự động thu thập:',
        items: [
          { text: 'Địa chỉ IP;' },
          { text: 'Mã nhận diện thiết bị;' },
          { text: 'Loại trình duyệt;' },
          { text: 'Hệ điều hành;' },
          { text: 'Thời điểm truy cập;' },
          { text: 'Tệp nhật ký;' },
          { text: 'Dữ liệu phân tích ứng dụng di động;' },
          { text: 'Dữ liệu vị trí khi được bật.' },
        ],
      },
      {
        number: '3.4',
        title: 'Dữ liệu cảm biến và giám sát nông nghiệp',
        intro: 'FarmBlock vận hành các hệ thống giám sát và môi trường tại nông trại, gồm:',
        items: [
          { text: 'Độ ẩm đất;' },
          { text: 'Nhiệt độ;' },
          { text: 'Tốc độ gió;' },
          { text: 'Các chỉ số liên quan đến nước;' },
          { text: 'Số liệu từ cảm biến môi trường;' },
          { text: 'Hệ thống camera và quan sát.' },
        ],
        paragraphs: [
          'Dữ liệu này có thể được gắn với các lô đất, khu vực vận hành hoặc tài sản nông nghiệp liên kết với người dùng.',
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'Cách chúng tôi sử dụng thông tin',
    paragraphs: ['Chúng tôi sử dụng thông tin đã thu thập để:'],
    items: [
      { text: 'Cung cấp và vận hành dịch vụ FarmBlock;' },
      { text: 'Quản lý tài khoản và xác thực người dùng;' },
      { text: 'Hỗ trợ theo dõi đất đai và lô đất;' },
      { text: 'Vận hành bảng điều khiển và phân tích môi trường;' },
      { text: 'Cải thiện hoạt động và hạ tầng nông nghiệp;' },
      { text: 'Cung cấp hỗ trợ khách hàng;' },
      { text: 'Hỗ trợ tiếp nhận và kích hoạt quyền sở hữu qua NFC;' },
      { text: 'Gửi thông báo và cập nhật dịch vụ;' },
      { text: 'Tăng cường bảo mật nền tảng và phòng chống gian lận;' },
      { text: 'Tuân thủ nghĩa vụ pháp lý và quy định hiện hành;' },
      { text: 'Thực hiện phân tích nội bộ và nghiên cứu vận hành.' },
    ],
    closingParagraphs: [
      'Trọng tâm vận hành hiện tại của FarmBlock là xây dựng hạ tầng quản trị và dữ liệu nông nghiệp nhằm nâng cao tính minh bạch và chất lượng ra quyết định vận hành.',
    ],
  },
  {
    number: 5,
    title: 'Căn cứ pháp lý cho việc xử lý dữ liệu',
    paragraphs: ['Trong phạm vi pháp luật áp dụng, FarmBlock xử lý dữ liệu cá nhân dựa trên:'],
    items: [
      { text: 'Sự đồng ý của người dùng;' },
      { text: 'Sự cần thiết để thực hiện hợp đồng;' },
      { text: 'Việc tuân thủ nghĩa vụ pháp lý;' },
      { text: 'Lợi ích kinh doanh hợp pháp;' },
      { text: 'Việc bảo vệ người dùng, hoạt động và an ninh nền tảng.' },
    ],
  },
  {
    number: 6,
    title: 'Chia sẻ và tiết lộ dữ liệu',
    paragraphs: ['FarmBlock không bán thông tin cá nhân.', 'Chúng tôi có thể chia sẻ thông tin với:'],
    items: [
      { text: 'Nhà cung cấp dịch vụ và đối tác hạ tầng được ủy quyền;' },
      { text: 'Đối tác công nghệ nông nghiệp;' },
      { text: 'Nhà cung cấp dịch vụ lưu trữ đám mây và phân tích;' },
      { text: 'Cơ quan pháp lý, quản lý hoặc nhà nước khi pháp luật yêu cầu;' },
      { text: 'Đơn vị tư vấn, kiểm toán hoặc cung cấp dịch vụ tuân thủ;' },
      { text: 'Đối tác vận hành hỗ trợ dịch vụ quản lý nông trại.' },
    ],
    closingParagraphs: [
      'Thông tin chỉ được chia sẻ khi cần thiết cho mục đích vận hành, hợp đồng, pháp lý hoặc bảo mật.',
    ],
  },
  {
    number: 7,
    title: 'Bảo mật dữ liệu',
    paragraphs: ['FarmBlock áp dụng các biện pháp kỹ thuật và tổ chức hợp lý theo thông lệ thương mại để bảo vệ thông tin khỏi:'],
    listGroups: [
      {
        items: [
          { text: 'Truy cập trái phép;' },
          { text: 'Mất mát hoặc trộm cắp;' },
          { text: 'Sử dụng sai mục đích;' },
          { text: 'Tiết lộ trái phép;' },
          { text: 'Sửa đổi hoặc phá hủy.' },
        ],
      },
      {
        intro: 'Các biện pháp bảo mật có thể gồm:',
        items: [
          { text: 'Kiểm soát quyền truy cập;' },
          { text: 'Mã hóa trao đổi dữ liệu;' },
          { text: 'Hệ thống phân quyền nội bộ;' },
          { text: 'Giám sát hạ tầng;' },
          { text: 'Ghi nhật ký vận hành;' },
          { text: 'Môi trường đám mây an toàn.' },
        ],
      },
    ],
    closingParagraphs: ['Tuy nhiên, không nền tảng số hoặc phương thức truyền tải nào có thể bảo đảm an toàn tuyệt đối.'],
  },
  {
    number: 8,
    title: 'Lưu trữ dữ liệu',
    paragraphs: ['Chúng tôi chỉ lưu giữ thông tin cá nhân trong khoảng thời gian hợp lý cần thiết để:'],
    items: [
      { text: 'Thực hiện các mục đích nêu trong Chính sách này;' },
      { text: 'Vận hành dịch vụ FarmBlock;' },
      { text: 'Lưu giữ hồ sơ pháp lý và kế toán;' },
      { text: 'Giải quyết tranh chấp;' },
      { text: 'Thực thi thỏa thuận;' },
      { text: 'Tuân thủ pháp luật và quy định áp dụng.' },
    ],
    closingParagraphs: ['Khi dữ liệu không còn cần thiết, dữ liệu có thể được xóa an toàn, ẩn danh hoặc lưu trữ.'],
  },
  {
    number: 9,
    title: 'Cookie và phân tích',
    paragraphs: ['FarmBlock có thể sử dụng cookie, công cụ phân tích và công nghệ tương tự để:'],
    items: [
      { text: 'Cải thiện chức năng website;' },
      { text: 'Phân tích việc sử dụng nền tảng;' },
      { text: 'Nâng cao hiệu năng và trải nghiệm người dùng;' },
      { text: 'Duy trì bảo mật;' },
      { text: 'Ghi nhớ tùy chọn của người dùng.' },
    ],
    closingParagraphs: ['Người dùng có thể điều chỉnh trình duyệt để tắt cookie, nhưng một số tính năng nền tảng có thể bị hạn chế.'],
  },
  {
    number: 10,
    title: 'Dịch vụ bên thứ ba',
    paragraphs: ['Dịch vụ FarmBlock có thể tích hợp hoặc liên kết với các dịch vụ bên thứ ba, gồm:'],
    items: [
      { text: 'Dịch vụ bản đồ;' },
      { text: 'Nhà cung cấp thanh toán;' },
      { text: 'Nền tảng phân tích;' },
      { text: 'Hạ tầng đám mây;' },
      { text: 'Hệ thống phát video hoặc camera.' },
    ],
    closingParagraphs: ['FarmBlock không chịu trách nhiệm về thực tiễn quyền riêng tư của các dịch vụ bên thứ ba không do chúng tôi vận hành.'],
  },
  {
    number: 11,
    title: 'Quyền của người dùng',
    paragraphs: ['Tùy theo pháp luật áp dụng, người dùng có thể có quyền:'],
    items: [
      { text: 'Truy cập dữ liệu cá nhân;' },
      { text: 'Yêu cầu sửa thông tin không chính xác;' },
      { text: 'Yêu cầu xóa một số thông tin;' },
      { text: 'Phản đối một số hoạt động xử lý dữ liệu;' },
      { text: 'Rút lại sự đồng ý trong phạm vi áp dụng;' },
      { text: 'Yêu cầu chuyển dữ liệu khi pháp luật cho phép.' },
    ],
    closingParagraphs: ['Yêu cầu có thể được gửi qua thông tin liên hệ bên dưới.'],
  },
  {
    number: 12,
    title: 'Quyền riêng tư của trẻ em',
    paragraphs: ['Dịch vụ FarmBlock không hướng đến trẻ em dưới độ tuổi theo quy định pháp luật áp dụng. Chúng tôi không cố ý thu thập thông tin cá nhân của người chưa thành niên nếu không có sự ủy quyền phù hợp.'],
  },
  {
    number: 13,
    title: 'Xử lý dữ liệu quốc tế',
    paragraphs: ['Hoạt động, hạ tầng công nghệ hoặc nhà cung cấp dịch vụ của FarmBlock có thể xử lý dữ liệu tại nhiều quốc gia hoặc vùng lãnh thổ. Khi sử dụng dịch vụ, người dùng thừa nhận thông tin có thể được chuyển, xử lý và lưu trữ ngoài phạm vi địa phương khi pháp luật cho phép.'],
  },
  {
    number: 14,
    title: 'Cập nhật Chính sách quyền riêng tư',
    paragraphs: ['FarmBlock có thể cập nhật Chính sách này theo từng thời điểm để phản ánh:'],
    items: [
      { text: 'Thay đổi trong vận hành;' },
      { text: 'Cập nhật công nghệ;' },
      { text: 'Phát triển pháp lý và quy định;' },
      { text: 'Mở rộng dịch vụ.' },
    ],
    closingParagraphs: ['Phiên bản cập nhật sẽ được công bố qua các kênh chính thức của FarmBlock cùng ngày hiệu lực mới.'],
  },
  {
    number: 15,
    title: 'Thông tin liên hệ',
    paragraphs: ['Nếu có câu hỏi, yêu cầu hoặc quan ngại về Chính sách này hay việc xử lý dữ liệu cá nhân, vui lòng liên hệ:', 'FarmBlock'],
    items: [
      { text: 'Website: farmblock.vn' },
      { text: 'Email: contact@farmblock.ai' },
      { text: 'Địa chỉ: Tầng 10, Tòa nhà Licogi 13, 164 đường Khuất Duy Tiến, phường Thanh Xuân, Hà Nội, Việt Nam' },
    ],
  },
]
