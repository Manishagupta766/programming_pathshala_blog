import { Link } from "react-router-dom";
import "../css/BlogExpand.css";
import faang from "../images/FAANG_companies_1200x768 3.svg";
import data_Structures from "../images/unsplash_NDfqqq_7QWM.svg";
import laptop from "../images/unsplash_95YRwf6CNw8.svg";

const BlogExpand = ()=>{
    return(
        <div className="full_container">
            <div className="attachedImage">
                <div className="intro">
                    <div className="heading">Guide for an Ultimate Tech Career</div>
                    <div className="date_time">JUNE 9,2021 | 5 MINS</div>
                </div>
                <div className="interview_preparation"><span>Interview Preparation</span></div>
            </div>
            <div className="content">
                <div className="author">By Vivekanand Vivek</div>
                <div className="rectangle">
                    <span>
                    A comprehensive guide on How to start a Career in Technology. It covers the skills required and how to prepare to transition to a tech career.
                    </span>
                </div>
                <div className="blog">
                    <span className="sub_heading">What skills are required to start a Tech Career?</span>
                    <div className="blog_content">
                        For beginning a career in Software Development, it becomes imperative for one to know about the basic nitty-gritty of the field. A software developer's role can be easily understood by dividing it into three parts —
                    </div>
                    <dl>
                        <dt>Computational Thinking</dt>
                        <dd>
                            It involves mathematical and logical thinking and comprises of -
                            <ul>
                                <li>
                                <span>Data Structures and Algorithms (DSA) </span>
                                <br />
                                    Mastering DSA increases your problem-solving skills, it gives a better perception of problems and helps in interviews, wherein you have to think through multiple approaches, analyse and pick the best approach for a particular problem.
                                    All the high-level concepts in Computer Science including DBMS, OS and System Design are somewhere hinged around DSA. For example, One can define a whole Database as a special kind of data structure like a Binary Index Tree that is used in making Databases. You can also master Data Structures and Algorithms with us and solve 600+ Problems at Renaissance.
                                </li>
                                <li>
                                    <span>Maths</span> 
                                    <br />
                                    Maths is an integral part of computational thinking as it helps you achieve depth in understanding the logical part of any data structure or algorithm. For example, one might have to apply the concepts of permutations and combinations while dealing with problems on Bit Manipulation, Dynamic programming etc.
                                </li>
                                <li>
                                    <span>Corner Case Thinking</span>
                                    <br />
                                    It's very important to handle corner cases in order to ship a bug-free production code. So, one must learn how to prove correctness of their approach/algorithm and write a code that works on universal test cases rather than formulating logic based on some random sample of tests.
                                </li>
                            </ul>
                        </dd>
                        <dt>System Thinking</dt>
                        <dd>
                            Compared to Computational Thinking it is more focused on the application part and consist of several high-level concepts of computer science.
                            <ul>
                                <li>
                                    <span>Low-Level Design</span>
                                    <br /> 
                                    Low-level design skills are indispensable since the beginning of your journey as a fresher in software roles. It simply means how clean, legible and comprehendible your code is. A good code incorporates all the appropriate low-level design principles.
                                </li>
                                <li>
                                    <span>High-Level Design and Computer Science Fundamentals (OS, DBMS, Computer Networks)</span>
                                    <br />
                                    Apart from high-level design, there are some computer science fundamentals that you must know to be a good software developer. These fundamentals include — Operating Systems, DBMS and Computer Networks.
                                </li>
                                <li>
                                    <span>Client, Servers and Load balancers</span>
                                    <br />
                                    An accomplished software developer should know about client-server model, concept of load-balancers, reverse-proxies, scaling mechanisms in order to be able to think of system that works at large scale.
                                </li>
                                <li>
                                    <span>Distributed Systems</span>
                                    <br />
                                    These days, cloud based systems are almost everywhere. So it becomes important to understand the motivation behind distributed systems like distributed databases, distributed file-systems etc and the nuances associated with them.
                                </li>
                            </ul>
                        </dd>
                        <dt>Design Thinking: Understanding your Users</dt>
                        <dd>
                            As a software developer it is your responsibility to ensure that your application/website is loved by the users. Accordingly, it becomes crucial to understand your users and their behaviour to create a product that is admired by all. Apart from technical roles, design thinking is also vital for Product leads, Front-end developers and UI/UX designers. This is illustrated well in this Leadership Principles Guide by Amazon for Software Developers which talks about Customer Obsession as an important skill.
                        </dd>
                        <dt>How to acquire these skills to get into the tech industry with no experience?</dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>Depth of Understanding</span>
                                    <br />
                                    To gain depth of understanding it becomes essential to give time to think about the topics. For example, so often people do not know but Binary Search can also be used to solve tricky problems of unsorted arrays and strings.
                                </li>
                                <li>
                                    <span>Practice assorted problems</span>
                                    <br />
                                    Earlier problems based on DP on trees and bitmasks were rare but quite recently they have come into popularity. Technologies are changing and people are upskilling themselves accordingly. Therefore it is important to give time to practise problems to keep yourself updated with the trend. You can use websites like Leetcode and Codeforces for practicing problems.
                                </li>
                                <li>    
                                    <span>Pattern recognition and mapping abilities</span>
                                    <br />
                                    A lot of problems asked in interviews are of a similar nature. A good candidate should be able to recognise the pattern and think of an answer. To cover all these patterns in great detail, you can explore our course with 250+ hours of lectures
                                    covering each pattern in great detail.
                                </li>
                                <li>
                                    <span>Occasional mentorship</span>
                                    <br />
                                    Not only in tech but mentorship is helpful in almost every sphere of life. If possible, find out a mentor to help you out with your specific needs. A good mentor is someone who understands your problems and provides you with the right feedback on a timely basis.
                                </li>
                                <li>
                                    <span>Learning and encouraging community</span>
                                    <br />
                                    It takes a hefty amount of time and hard work to become a proficient software developer and that road can be tough with constant challenges. It is when a community of learners comes to the rescue. Learning with a group of like-minded people saves you from boredom and keeps you motivated for a longer-term. In the process, you may also make life-long friends and learn various approaches to the same problem.
                                </li>
                            </ul>
                        </dd>
                        <dd>
                            In conclusion, the preparation required to start your tech career would require a lot of hardwork and practice from your end. A good community around you and occasional mentorship can help accelerate the process.
                        </dd>
                        <dt>Why learn Data Structures and Algorithms rather than exploring different tech stacks?
                        </dt>
                        <dd>
                            <ul>
                                <li>
                                    <span>At the end of the day, everything is a problem</span>
                                    <br /> 
                                    This is where your practice of problems based on data structure and algorithms comes into use. Though it may not directly help you but during the practice phase you shall develop a problem-solving mindset. This mindset not only helps in starting your career in technology but also later on in job.
                                </li>
                                <li>
                                    <span>It helps you become a robust and adaptive engineer</span>
                                    <br /> 
                                    In the current fast-paced world where technology is changing every moment, your problem-solving skills are more valued than your knowledge of the ever changing tech-stack. Suppose your company moves to a different tech stack, you can still adapt if you are a good problem solver and know the logic behind the working of systems.
                                </li>
                                <li>
                                    <span>Bright personal career</span>
                                    <br />
                                    Currently technical jobs are one of the most sought-after and high paying jobs in the industry. Making a career in the technical field gives promises of a br /ight future. Apart from this, in case you wish to switch to UI/UX or for some other role, then your technical knowledge gives you an extra edge compared to the other candidates. Thus, for making a transition to a tech career, DSA is extremely important.
                                </li>
                            </ul>
                        </dd>
                        <dd>
                            If you are preparing for getting into Tech Roles at Product Based Companies, you must spend time solving problems with Data Structures and Algorithms, System Design, Computer Science Fundamentals and Low Level Design. We at Programming Pathshala, have created a comprehensive program, Renaissance, which helps you to dive deep into these subjects and be an incredible engineer. <span className="learn_more">Learn more about Renaissance here.</span> 
                        </dd>
                    </dl>
                </div>
                <div className="line"></div>
                <div className="links">
                    <Link to="#0" className="linkedin"></Link>
                    <Link to="#0" className="youtube"></Link>
                    <Link to="#0" className="facebook"></Link>
                    <Link to="#0" className="instagram"></Link>
                    <Link to="#0" className="telegram"></Link>
                </div>
                <div className="tags">
                    <div className="tag">Data Structures</div>
                    <div className="tag">Interview Preperations</div>
                    <div className="tag">Competitive Programming</div>
                    <div className="tag">Student Experiences</div>
                    <div className="tag">About Us</div>
                </div>
            </div>
            <div className="you_may_like">You may also Like</div>
            <div className="cards">
                <div className="item">
                    <img className="img1" src={faang} alt="faang" />
                    <div className="some_tags"><span>Interview Preparation</span></div>
                    <div className="card_text">10 Most Common Mistakes To Avoid While Preparing for FAANG Company Coding Interviews</div>
                    <div className="date_time">JUNE 9,2021 | 5 MINS</div>
                    <div className="card_author">By Vivekanand Vivek</div>
                </div>
                <div className="item">
                    <img src={data_Structures} alt="data_structures" />
                    <div className="some_tags"><span>Data Structures</span></div>
                    <div className="card_text">Asymptotic Analysis of Different Data Structures Operations</div>
                    <div className="date_time">JUNE 9,2021 | 5 MINS</div>
                    <div className="card_author">By Bharat Khanna</div>
                </div>
                <div className="item">
                    <img src={laptop} alt="laptop" />
                    <div className="some_tags"><span>Competitive Programming</span></div>
                    <div className="card_text">Roadmap to be a Candidate Master at Codeforces</div>
                    <div className="date_time">JUNE 9,2021 | 5 MINS</div>
                    <div className="card_author">By Bharat Khanna</div>
                </div>
            </div>
        </div>
    )
}

export default BlogExpand;