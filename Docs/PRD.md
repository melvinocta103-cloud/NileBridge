NileBridge  
Institutional Digital Platform  
Product Requirements Document — PRD v1.0  
Document Version: 1.0  
Status: Client Review  
Product Type: Institutional Website \+ Admissions Platform \+ Admin CMS  
Target Users: Prospective Students, Applicants, Parents/Guardians, Staff, Administrators  
Primary Platform: Responsive Web Application  
Recommended Stack: Next.js \+ TypeScript \+ PostgreSQL  
Deployment: Cloud Infrastructure  
Development Strategy: MVP ? Production ? Institutional Platform

1\. Executive Summary  
The proposed system is a modern digital platform for an educational institution that combines:  
1.Institutional website  
2.Academic programme catalogue  
3.Online admissions  
4.Applicant portal  
5.Administrative dashboard  
6.Content management system  
7.Communication and notification system  
8.Reporting and analytics  
The platform will provide a single digital entry point where prospective students can discover programmes, understand admission requirements, submit applications, upload documents and monitor their application status.  
Institutional staff will be able to manage programmes, applicants, applications, news, admissions information and website content through an administrative dashboard.

2\. Product Vision  
Create a trusted digital front door for the institution that converts prospective students into applicants while reducing manual admissions and content-management work for staff.

3\. Business Objectives  
Primary objectives  
?Increase online student enquiries.  
?Increase online applications.  
?Make programmes easier to discover.  
?Reduce manual application processing.  
?Centralize institutional information.  
?Allow staff to update website content.  
?Give applicants application-status visibility.  
?Provide management with application statistics.  
Secondary objectives  
?Improve SEO.  
?Improve mobile accessibility.  
?Establish a scalable technical foundation.  
?Prepare for future student-information-system integrations.

4\. Success Metrics  
KPI	MVP Target  
Website uptime	\=99%  
Mobile responsiveness	100% major screens  
Programme search	\<2 sec  
Page load	\<3 sec target  
Application submission success	\=98%  
Failed document uploads	\<2%  
Admin availability	\=99%  
Application tracking	100% submitted applications  
SEO-indexable pages	All public content pages

5\. Target Users  
5.1 Prospective Student  
Needs to:  
?Discover programmes.  
?Compare options.  
?Understand requirements.  
?Check fees.  
?Contact admissions.  
?Start an application.  
5.2 Applicant  
Needs to:  
?Create an account.  
?Complete application.  
?Upload documents.  
?Submit application.  
?Track status.  
?Receive notifications.  
5.3 Admissions Officer  
Needs to:  
?View applications.  
?Review documents.  
?Request corrections.  
?Approve/reject applications.  
?Communicate with applicants.  
5.4 Content Editor  
Needs to:  
?Update pages.  
?Publish news.  
?Manage events.  
?Update programme information.  
5.5 Administrator  
Needs to:  
?Manage users.  
?Configure programmes.  
?Manage applications.  
?View reports.  
?Configure system settings.  
5.6 Super Administrator  
Has complete platform access.

6\. Scope  
The complete product roadmap contains 50+ functional pages/modules.  
Public Website  
1.Home  
2.About Institution  
3.History  
4.Mission & Vision  
5.Core Values  
6.Leadership  
7.Governance  
8.Faculties/Schools  
9.Faculty Details  
10.Programmes  
11.Programme Details  
12.Programme Search  
13.Admissions  
14.Admission Requirements  
15.How to Apply  
16.Application Guidelines  
17.Tuition & Fees  
18.Scholarships  
19.International Students  
20.Campuses  
21.Campus Details  
22.Student Life  
23.Accommodation  
24.Facilities  
25.Library  
26.News  
27.News Details  
28.Events  
29.Event Details  
30.Announcements  
31.Downloads  
32.FAQs  
33.Contact  
34.Careers  
35.Privacy Policy  
36.Terms & Conditions  
Applicant Platform  
37.Registration  
38.Login  
39.Forgot Password  
40.Applicant Dashboard  
41.Personal Information  
42.Academic Information  
43.Programme Selection  
44.Application Form  
45.Document Upload  
46.Application Review  
47.Application Submission  
48.Application Status  
49.Notifications  
50.Profile Settings  
Administration  
51.Admin Login  
52.Dashboard  
53.Applicant Management  
54.Application Management  
55.Programme Management  
56.Faculty Management  
57.Campus Management  
58.Admissions Management  
59.Intake Management  
60.Document Management  
61.News Management  
62.Events Management  
63.Pages/CMS  
64.Media Library  
65.User Management  
66.Roles & Permissions  
67.Notifications  
68.Reports  
69.Analytics  
70.Audit Logs  
71.System Settings  
That's already 71 functional pages/modules, giving you plenty of room to separate MVP from production.

7\. Complete Sitemap  
/  
¦  
\+-- /about  
¦   \+-- /history  
¦   \+-- /mission-vision  
¦   \+-- /values  
¦   \+-- /leadership  
¦   \+-- /governance  
¦  
\+-- /faculties  
¦   \+-- /faculties/:slug  
¦  
\+-- /programmes  
¦   \+-- /search  
¦   \+-- /:slug  
¦  
\+-- /admissions  
¦   \+-- /requirements  
¦   \+-- /how-to-apply  
¦   \+-- /fees  
¦   \+-- /scholarships  
¦   \+-- /international  
¦  
\+-- /campuses  
¦   \+-- /:slug  
¦  
\+-- /student-life  
¦  
\+-- /facilities  
¦  
\+-- /library  
¦  
\+-- /news  
¦   \+-- /:slug  
¦  
\+-- /events  
¦   \+-- /:slug  
¦  
\+-- /announcements  
¦  
\+-- /downloads  
¦  
\+-- /faq  
¦  
\+-- /contact  
¦  
\+-- /careers  
¦  
\+-- /apply  
¦  
\+-- /portal  
    \+-- /login  
    \+-- /register  
    \+-- /forgot-password  
    ¦  
    \+-- /dashboard  
        \+-- /profile  
        \+-- /application  
        \+-- /documents  
        \+-- /programme  
        \+-- /status  
        \+-- /notifications  
        \+-- /settings

8\. MVP Sitemap  
Don't build the entire 71-module system initially.  
MVP public pages  
Home  
About  
Leadership  
Faculties  
Programmes  
Programme Details  
Admissions  
Requirements  
How to Apply  
Fees  
Scholarships  
Campuses  
News  
News Details  
Contact  
FAQ  
MVP applicant pages  
Register  
Login  
Dashboard  
Profile  
Application  
Documents  
Review  
Status  
Notifications  
MVP admin  
Dashboard  
Applications  
Applicants  
Programmes  
Faculties  
News  
Pages  
Media  
Users  
Reports  
Settings

9\. Functional Requirements  
FR-001 — Homepage  
The system shall display:  
?Institution branding.  
?Hero section.  
?Primary CTA.  
?Programme search.  
?Featured programmes.  
?Admissions CTA.  
?Institutional highlights.  
?News.  
?Events.  
?Contact information.  
?Footer.  
Acceptance criteria  
?Page works on mobile, tablet and desktop.  
?Primary "Apply Now" CTA is visible.  
?Programme search works.  
?Content is manageable through CMS where applicable.

10\. Programme Catalogue  
The system shall allow administrators to create:  
?Programme name.  
?Programme code.  
?Degree level.  
?Faculty.  
?Duration.  
?Study mode.  
?Campus.  
?Intake.  
?Fees.  
?Description.  
?Requirements.  
?Career opportunities.  
Acceptance criteria  
An administrator can create, edit, publish and unpublish a programme without developer intervention.

11\. Programme Search  
Users can filter programmes by:  
?Keyword.  
?Faculty.  
?Level.  
?Study mode.  
?Campus.  
?Duration.  
Example:  
Search: Computer

Faculty: Science & Technology

Level: Bachelor's

Mode: Full Time

\[Search\]

12\. Admissions  
The admissions system shall provide:  
?Admission requirements.  
?Application process.  
?Application deadlines.  
?Required documents.  
?Fees.  
?Intakes.  
?Contact information.

13\. Online Application  
Application wizard:  
Step 1  
Personal Information

?

Step 2  
Contact Information

?

Step 3  
Academic Background

?

Step 4  
Programme Selection

?

Step 5  
Documents

?

Step 6  
Review

?

Step 7  
Submit  
Applicants should be able to save an incomplete application.

14\. Applicant Dashboard  
Dashboard  
\------------------------

Application ID  
APP-2026-000123

Programme  
BSc Computer Science

Status  
UNDER REVIEW

Progress  
¦¦¦¦¦¦¦¦¦¦ 80%

Documents  
4 / 4 uploaded

Notifications  
3 unread

15\. Application Status  
Supported statuses:  
DRAFT  
SUBMITTED  
DOCUMENT\_REVIEW  
INCOMPLETE  
UNDER\_REVIEW  
APPROVED  
REJECTED  
WITHDRAWN  
Every status change should generate an audit record.

16\. Document Management  
Applicants can upload:  
?Identification document.  
?Passport photograph.  
?Academic certificates.  
?Transcripts.  
?Supporting documents.  
System requirements:  
?File type validation.  
?File-size limits.  
?Virus/malware scanning where infrastructure supports it.  
?Secure storage.  
?Document status.  
?Admin verification.

17\. Notifications  
Events:  
Application submitted  
Document uploaded  
Document rejected  
Application requires correction  
Application approved  
Application rejected  
New announcement  
MVP:  
Email  
Production:  
Email \+ SMS \+ WhatsApp/other approved channels where appropriate.

18\. CMS  
Administrators can manage:  
?Homepage sections.  
?About pages.  
?Programme information.  
?News.  
?Events.  
?Announcements.  
?FAQs.  
?Downloads.  
?Contact information.  
Content should support:  
Draft  
Scheduled  
Published  
Archived

19\. PostgreSQL Database  
Core tables  
users  
roles  
permissions  
role\_permissions

applicants  
applicant\_profiles

faculties  
programmes  
programme\_requirements  
programme\_courses

campuses  
intakes

applications  
application\_documents  
application\_status\_history

news  
events  
announcements

pages  
media

notifications  
contact\_messages

audit\_logs  
system\_settings

20\. ERD  
                    \+--------------+  
                    ¦    USERS     ¦  
                    \+--------------+  
                           ¦  
                           ¦  
                    \+------?-------+  
                    ¦  APPLICANTS  ¦  
                    \+--------------+  
                           ¦  
                           ¦ 1:N  
                           ?  
                    \+--------------+  
                    ¦ APPLICATIONS ¦  
                    \+--------------+  
                           ¦  
              \+------------+-------------+  
              ¦            ¦             ¦  
              ?            ?             ?  
       DOCUMENTS     STATUS HISTORY   PROGRAMME  
                                         ¦  
                                         ¦  
                                         ?  
                                    \+----------+  
                                    ¦ FACULTY  ¦  
                                    \+----------+

       \+----------+  
       ¦ CAMPUSES ¦  
       \+----------+  
            ¦  
            \+------\< PROGRAMMES

       \+----------+  
       ¦  USERS   ¦  
       \+----------+  
            ¦  
            ?  
       ROLES/PERMISSIONS

       \+------------+  
       ¦   PAGES    ¦  
       \+------------+

       \+------------+  
       ¦    NEWS    ¦  
       \+------------+

       \+------------+  
       ¦   EVENTS   ¦  
       \+------------+

21\. PostgreSQL Schema  
users  
users (  
    id UUID PRIMARY KEY,  
    email VARCHAR UNIQUE NOT NULL,  
    password\_hash TEXT,  
    first\_name VARCHAR NOT NULL,  
    last\_name VARCHAR NOT NULL,  
    phone VARCHAR,  
    role\_id UUID,  
    status VARCHAR NOT NULL,  
    email\_verified\_at TIMESTAMP,  
    created\_at TIMESTAMP NOT NULL,  
    updated\_at TIMESTAMP NOT NULL  
)  
faculties  
faculties (  
    id UUID PRIMARY KEY,  
    name VARCHAR NOT NULL,  
    slug VARCHAR UNIQUE NOT NULL,  
    description TEXT,  
    image\_url TEXT,  
    status VARCHAR NOT NULL,  
    created\_at TIMESTAMP NOT NULL,  
    updated\_at TIMESTAMP NOT NULL  
)  
programmes  
programmes (  
    id UUID PRIMARY KEY,  
    faculty\_id UUID REFERENCES faculties(id),  
    name VARCHAR NOT NULL,  
    code VARCHAR UNIQUE,  
    slug VARCHAR UNIQUE NOT NULL,  
    degree\_level VARCHAR NOT NULL,  
    duration VARCHAR,  
    study\_mode VARCHAR,  
    description TEXT,  
    requirements TEXT,  
    career\_opportunities TEXT,  
    fee\_amount DECIMAL,  
    currency VARCHAR(10),  
    status VARCHAR NOT NULL,  
    created\_at TIMESTAMP NOT NULL,  
    updated\_at TIMESTAMP NOT NULL  
)  
applications  
applications (  
    id UUID PRIMARY KEY,  
    application\_number VARCHAR UNIQUE NOT NULL,  
    applicant\_id UUID REFERENCES applicants(id),  
    programme\_id UUID REFERENCES programmes(id),  
    intake\_id UUID REFERENCES intakes(id),  
    status VARCHAR NOT NULL,  
    submitted\_at TIMESTAMP,  
    reviewed\_at TIMESTAMP,  
    decision\_at TIMESTAMP,  
    created\_at TIMESTAMP NOT NULL,  
    updated\_at TIMESTAMP NOT NULL  
)

22\. API Architecture  
Base URL:  
/api/v1  
Authentication  
POST /auth/register  
POST /auth/login  
POST /auth/logout  
POST /auth/refresh  
POST /auth/forgot-password  
POST /auth/reset-password  
POST /auth/verify-email  
Programmes  
GET    /programmes  
GET    /programmes/:id  
POST   /programmes  
PATCH  /programmes/:id  
DELETE /programmes/:id  
Faculties  
GET    /faculties  
GET    /faculties/:id  
POST   /faculties  
PATCH  /faculties/:id  
DELETE /faculties/:id  
Applications  
GET    /applications  
GET    /applications/:id  
POST   /applications  
PATCH  /applications/:id  
POST   /applications/:id/submit  
POST   /applications/:id/withdraw  
Documents  
POST   /applications/:id/documents  
GET    /applications/:id/documents  
DELETE /documents/:id  
PATCH  /documents/:id/verify  
Applicant  
GET   /applicant/profile  
PATCH /applicant/profile  
GET   /applicant/applications  
GET   /applicant/notifications  
News  
GET    /news  
GET    /news/:slug  
POST   /news  
PATCH  /news/:id  
DELETE /news/:id

23\. RBAC Matrix  
Module	Super Admin	Admin	Admissions	Editor	Applicant  
Dashboard	Full	Full	Limited	Limited	Own  
Users	Full	Limited	?	?	Own  
Programmes	Full	Full	View	Edit	View  
Faculties	Full	Full	View	Edit	View  
Applications	Full	Full	Full	?	Own  
Documents	Full	Full	Full	?	Own  
News	Full	Full	View	Full	View  
Pages	Full	Full	?	Full	View  
Media	Full	Full	Limited	Full	?  
Reports	Full	Full	Limited	?	Own  
Settings	Full	Limited	?	?	Own  
Audit Logs	Full	View	?	?	?

24\. UI Screen Inventory  
Public  
Desktop  
1.Homepage  
2.About  
3.Leadership  
4.Faculty listing  
5.Faculty details  
6.Programme listing  
7.Programme details  
8.Admissions  
9.Requirements  
10.Fees  
11.Scholarships  
12.Campus  
13.News  
14.News details  
15.Events  
16.Contact  
17.FAQ  
Mobile  
Every public page must have:  
?Responsive navigation.  
?Sticky/accessible CTA.  
?Mobile-friendly forms.  
?Touch-friendly controls.  
?Optimized imagery.

25\. Applicant UI  
Login  
Register  
Forgot Password

Dashboard  
Profile  
Application  
Academic Information  
Programme Selection  
Documents  
Review  
Submission Confirmation  
Application Status  
Notifications  
Settings

26\. Admin UI  
Login  
Dashboard

Applications  
 \+-- All  
 \+-- Pending  
 \+-- Under Review  
 \+-- Approved  
 \+-- Rejected

Applicants

Programmes  
 \+-- All  
 \+-- Create  
 \+-- Edit

Faculties

Admissions  
 \+-- Intakes  
 \+-- Requirements  
 \+-- Deadlines

CMS  
 \+-- Pages  
 \+-- News  
 \+-- Events  
 \+-- Announcements  
 \+-- Media

Reports

Users

Roles

Settings

Audit Logs

27\. User Stories  
Prospective student  
As a prospective student, I want to search programmes so that I can find a course suitable for my career.  
Applicant  
As an applicant, I want to save my application so that I can complete it later.  
Applicant  
As an applicant, I want to upload my documents so that the institution can verify my eligibility.  
Applicant  
As an applicant, I want to track my application so that I know whether the institution has reviewed it.  
Admissions Officer  
As an admissions officer, I want to filter applications by status so that I can prioritize pending applications.  
Admissions Officer  
As an admissions officer, I want to verify applicant documents so that incomplete applications can be identified.  
Editor  
As an editor, I want to publish news without developer assistance.  
Administrator  
As an administrator, I want to manage programmes so that academic information remains accurate.  
Super Admin  
As a super administrator, I want to control user permissions so that sensitive operations are restricted.

28\. Acceptance Criteria  
Application  
An application is considered successfully submitted only when:  
?Applicant is authenticated.  
?Required personal information exists.  
?Programme is selected.  
?Required documents are uploaded.  
?Required declarations are accepted.  
?Validation succeeds.  
?Application record is persisted.  
?Application number is generated.  
?Status changes to SUBMITTED.  
?Status history is recorded.  
?Confirmation notification is created.

29\. Security Requirements  
This is an educational institution handling personal and academic information, so security isn't optional.  
Authentication  
?Secure password hashing.  
?Session/token protection.  
?Email verification.  
?Password reset.  
?Rate limiting.  
?Admin 2FA recommended.  
Authorization  
Every protected API endpoint must verify:  
Authentication  
       \+  
Authorization  
       \+  
Resource ownership  
An applicant must never be able to access:  
/api/applications/OTHER\_PERSON\_ID  
simply by changing an ID.

30\. File Security  
Uploaded documents should:  
?Never be publicly accessible by default.  
?Use private object storage.  
?Use signed URLs for access.  
?Validate MIME type.  
?Validate extension.  
?Limit file size.  
?Sanitize filenames.  
?Record uploader.  
?Record timestamps.

31\. Audit Logging  
Sensitive actions should create:  
audit\_logs  
Example:  
Admin: admin@institution  
Action: APPLICATION\_APPROVED  
Application: APP-2026-000123  
Timestamp: 2026-08-20 14:22  
IP: ...  
Audit:  
?Login.  
?Logout.  
?Application review.  
?Status change.  
?Document verification.  
?User creation.  
?Permission changes.  
?Programme changes.  
?Content publishing.

32\. SEO  
Public pages should support:  
?Metadata.  
?Open Graph.  
?Canonical URLs.  
?XML sitemap.  
?Robots.txt.  
?Structured data.  
?SEO-friendly slugs.  
?Search engine indexing.  
?Programme-specific metadata.  
Example:  
/institution/programmes/bsc-computer-science  
not:  
/programme?id=392

33\. Performance Requirements  
Target:  
LCP \< 2.5s  
CLS \< 0.1  
INP \< 200ms  
Where practical.  
Optimization:  
?Image compression.  
?WebP/AVIF.  
?Lazy loading.  
?CDN.  
?Server-side rendering.  
?Static generation where appropriate.  
?Database indexing.  
?Pagination.

34\. Hosting Architecture  
Recommended MVP  
                    Internet  
                       ¦  
                       ?  
                 Cloudflare  
                       ¦  
                       ?  
                   Vercel  
                       ¦  
                  Next.js App  
                       ¦  
          \+------------+------------+  
          ?            ?            ?  
     PostgreSQL    Object Storage  Email  
          ¦            ¦  
          ¦            ¦  
          \+------------+  
Recommended components:  
Frontend/Backend  
Next.js

Database  
PostgreSQL

Hosting  
Vercel or equivalent

Storage  
S3-compatible object storage

DNS/CDN  
Cloudflare

Email  
Transactional email provider

Monitoring  
Error monitoring \+ uptime monitoring

Analytics  
Privacy-conscious analytics / GA where appropriate

35\. Production Architecture  
Once the institution grows:  
                    Cloudflare  
                         ¦  
                         ?  
                  Load Balancer  
                         ¦  
             \+-----------------------+  
             ?                       ?  
        Web Application         API Layer  
             ¦                       ¦  
             \+-----------------------+  
                         ?  
                   PostgreSQL  
                         ¦  
            \+------------+------------+  
            ?            ?            ?  
          Redis       Storage       Queue  
            ¦  
            ?  
      Background Workers  
            ¦  
     \+------+--------+  
     ?      ?        ?  
   Email    SMS    Reports  
But do not build this architecture on day one unless there is a real scale requirement.

36\. Development Milestones  
Milestone 1 — Discovery  
3–5 days  
Deliverables:  
?PRD  
?Sitemap  
?Requirements  
?User flows  
?Technical architecture  
?Database architecture

Milestone 2 — UI/UX  
5–7 days  
Deliverables:  
?Design system.  
?Desktop UI.  
?Mobile UI.  
?Applicant portal.  
?Admin dashboard.

Milestone 3 — Foundation  
4–5 days  
Deliverables:  
?Repository.  
?CI/CD.  
?Database.  
?Authentication.  
?RBAC.  
?Storage.  
?Environment configuration.

Milestone 4 — Public Website  
7–10 days  
Deliverables:  
?Homepage.  
?About.  
?Faculties.  
?Programmes.  
?Admissions.  
?News.  
?Contact.  
?SEO.

Milestone 5 — Applicant System  
7–10 days  
Deliverables:  
?Registration.  
?Application.  
?Documents.  
?Programme selection.  
?Submission.  
?Status.  
?Notifications.

Milestone 6 — Admin  
5–8 days  
Deliverables:  
?Dashboard.  
?Application management.  
?Programme CMS.  
?News CMS.  
?User management.  
?Reports.

Milestone 7 — QA & Launch  
4–7 days  
Deliverables:  
?Functional testing.  
?Security testing.  
?Mobile testing.  
?Performance testing.  
?UAT.  
?Production deployment.  
?Documentation.

37\. MVP Timeline  
Estimated total:  
5–7 weeks  
Week 1  
Discovery \+ UI/UX

Week 2  
Foundation \+ Database \+ Auth

Week 3  
Public Website

Week 4  
Programmes \+ Admissions

Week 5  
Applicant Portal

Week 6  
Admin \+ CMS

Week 7  
Testing \+ UAT \+ Launch  
A competent solo developer can build a smaller MVP, but 5–7 weeks is the more defensible client commitment once real content, revisions, testing and deployment are included.

38\. Team Structure  
MVP  
Lead Full-Stack Developer  
Responsible for:  
?Architecture.  
?Backend.  
?Database.  
?Frontend.  
?Authentication.  
?Deployment.  
UI/UX Designer  
Responsible for:  
?Wireframes.  
?Visual design.  
?Responsive layouts.  
?Design system.  
QA Tester  
Part-time:  
?Functional testing.  
?Regression testing.  
?Mobile testing.  
?UAT.  
Client/Product Owner  
Provides:  
?Institutional content.  
?Programme information.  
?Admission requirements.  
?Branding.  
?Approval.

39\. Production Team  
Product Manager  
       ¦  
       \+-- UI/UX Designer  
       ¦  
       \+-- Frontend Developer  
       ¦  
       \+-- Backend Developer  
       ¦  
       \+-- DevOps Engineer  
       ¦  
       \+-- QA Engineer  
       ¦  
       \+-- Security Engineer  
You don't need all seven people full-time.

40\. Testing Strategy  
Functional  
Test:  
?Registration.  
?Login.  
?Application.  
?Document upload.  
?Application submission.  
?Admin review.  
?Programme management.  
Security  
Test:  
?Authentication bypass.  
?IDOR.  
?Privilege escalation.  
?CSRF where applicable.  
?XSS.  
?SQL injection.  
?File upload attacks.  
?Rate-limit bypass.  
?Session attacks.  
Performance  
Test:  
?Homepage.  
?Programme search.  
?Application form.  
?Concurrent users.  
?Database queries.

41\. MVP Pricing Proposal  
Now the uncomfortable part:  
Don't underprice this as a normal "website."  
You're building authentication, applications, document management, database workflows, CMS and admin functionality.  
That's software.  
Package A — Institutional Website MVP  
1,500–2,500  
Includes:  
?Public website.  
?Programmes.  
?Faculties.  
?Admissions.  
?News.  
?CMS.  
?Contact.  
?SEO.  
?Responsive design.  
No applicant portal.

42\. Package B — Digital Admissions MVP  
Recommended  
3,000–5,000  
Includes everything in Package A plus:  
?Applicant registration.  
?Login.  
?Application wizard.  
?Document uploads.  
?Application tracking.  
?Applicant dashboard.  
?Admin dashboard.  
?Application review.  
?RBAC.  
?Email notifications.  
?PostgreSQL.  
?Production deployment.  
This is the package I'd pitch to a serious institution.

43\. Package C — Production Institutional Platform  
7,500–15,000+  
Includes:  
?Everything in MVP.  
?Advanced CMS.  
?Online payments.  
?SMS.  
?Admission letters.  
?Advanced reporting.  
?Analytics.  
?Audit logs.  
?2FA.  
?Advanced RBAC.  
?Backup architecture.  
?Monitoring.  
?Security hardening.  
?Advanced document management.  
?Integration APIs.  
?ERP/SIS integrations.  
The actual price should increase further if they expect custom ERP functionality rather than integrations.

44\. Future Institutional ERP  
This should be quoted separately.  
Potential modules:  
Admissions  
Student Information System  
Finance  
Fees  
Course Registration  
Results  
Examinations  
Timetable  
Library  
Hostel  
Transport  
HR  
Staff Management  
LMS Integration  
Communication  
Reports  
That isn't a "website upgrade."  
That's an institutional information system.

45\. Suggested Payment Structure  
For a $4,000 MVP:  
30% — Project kickoff

20% — UI/UX approval

25% — Core development complete

15% — UAT

10% — Production launch  
Example:  
Milestone	%	$4,000  
Kickoff	30%	$1,200  
UI/UX	20%	$800  
Development	25%	$1,000  
UAT	15%	$600  
Launch	10%	$400  
Do not agree to 100% payment after launch. You're carrying all the delivery risk if you do.

46\. Recurring Costs  
Make these separate from development fees.  
Potential costs:  
?Domain.  
?Hosting.  
?Database.  
?Storage.  
?Email.  
?SMS.  
?Payment gateway fees.  
?Monitoring.  
?Maintenance.  
Maintenance package  
Example:  
100–300/month  
Depending on SLA and scope.  
Includes:  
?Bug fixes.  
?Security updates.  
?Backups monitoring.  
?Minor content support.  
?Infrastructure monitoring.  
New features should be billed separately.

47\. MVP Out of Scope  
Explicitly exclude:  
? Mobile application  
? LMS  
? Student ERP  
? Accounting system  
? Payroll  
? Library management  
? Hostel management  
? Complex payment reconciliation  
? Biometric authentication  
? AI chatbot  
? Custom SMS infrastructure  
? Third-party ERP integrations  
? Advanced analytics  
? Multi-institution tenancy  
Unless specifically included in the contract.  
This section will save you from scope creep.

48\. Change Request Policy  
Any functionality not specified in the approved PRD is considered a Change Request.  
Change requests require:  
1.Description.  
2.Estimated effort.  
3.Additional cost.  
4.Revised delivery date.  
5.Client approval.  
Only then does development begin.

49\. Client Responsibilities  
The institution must provide:  
?Logo.  
?Brand guidelines.  
?Programme information.  
?Faculty information.  
?Admission requirements.  
?Fee structures.  
?Academic calendars.  
?Leadership information.  
?Campus information.  
?Images.  
?Legal documents.  
?Contact information.  
?Privacy policy.  
?Terms and conditions.  
You should not be responsible for inventing institutional information.

50\. Acceptance & Launch  
The system is considered ready for launch when:  
?All agreed MVP features are implemented.  
?Critical bugs are resolved.  
?Client completes UAT.  
?Client approves content.  
?Production environment is configured.  
?Domain is connected.  
?SSL is active.  
?Backups are configured.  
?Admin accounts are created.  
?Deployment documentation is delivered.

51\. Version Roadmap  
                 INSTITUTION DIGITAL PLATFORM

                         V1.0  
                          ¦  
             \+-------------------------+  
             ¦                         ¦  
        PUBLIC WEBSITE           ADMISSIONS MVP  
             ¦                         ¦  
             \+-------------------------+  
                          ¦  
                         V1.5  
                          ¦  
              Payments \+ SMS \+ Reports  
                          ¦  
                         V2.0  
                          ¦  
                   Student Portal  
                          ¦  
                         V3.0  
                          ¦  
                Institutional ERP

52\. Recommended Product Strategy  
Here's the part I'd be strict about if you're pitching this client.  
Don't say:  
"I'll build you a website similar to Cavendish University."  
That's positioning yourself as a web designer.  
Say:  
"We will build a modern institutional digital platform that combines the university website, academic programme catalogue, online admissions, applicant tracking and administrative content management into one scalable system."  
That's a software product.

53\. Recommended MVP Stack  
Frontend  
Next.js  
TypeScript  
Tailwind CSS  
shadcn/ui

Backend  
Next.js  
Server Actions / REST API

Database  
PostgreSQL

ORM  
Prisma

Authentication  
Auth.js / established auth provider

Storage  
S3-compatible object storage

Email  
Transactional email provider

CDN/DNS  
Cloudflare

Hosting  
Vercel / equivalent

Monitoring  
Error \+ uptime monitoring

Analytics  
Web analytics

Version Control  
GitHub

CI/CD  
GitHub Actions

54\. Final Recommended MVP  
If I were building this for a real institution today, I would cut the first release down to this:  
                    MVP  
                     ¦  
        \+------------+------------+  
        ¦            ¦            ¦  
     WEBSITE     ADMISSIONS     ADMIN  
        ¦            ¦            ¦  
        ?            ?            ?  
     Home        Register      Dashboard  
     About       Login         Applications  
     Faculties   Application   Applicants  
     Programmes  Documents     Programmes  
     Admissions  Tracking      Faculties  
     News        Notifications News  
     Contact                   CMS  
                               Users  
                               Reports  
Timeline: 5–7 weeks  
Recommended MVP budget: 3,000–5,000  
Production platform: 7,500–15,000+ depending heavily on integrations and institutional workflows.  
And there's one major commercial lesson here:  
Don't let the client buy the whole future on day one. Sell the MVP, prove that students actually use the admissions workflow, then expand into payments, student portal, ERP integrations and other modules. That gives you recurring development work while keeping the first delivery realistic.

