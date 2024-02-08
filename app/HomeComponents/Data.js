import NodeJs from "@/public/images/LightMode/Home/node-js.png";
import PHP from "@/public/images/LightMode/Home/php.png";
import Clojure from "@/public/images/LightMode/Home/clojure.png";
import Drupal from "@/public/images/LightMode/Home/drupal.png";
import Java from "@/public/images/LightMode/Home/java.png";
import MySQL from "@/public/images/LightMode/Home/my-sql.png";
import Python from "@/public/images/LightMode/Home/python.png";
import Ruby from "@/public/images/LightMode/Home/ruby.png";
import Scala from "@/public/images/LightMode/Home/scala.png";
import Wordpress from "@/public/images/LightMode/Home/wordpress.png";
import SodiqDavid from "@/public/images/sodiq-david.png";

export const developmentToolsData = [
  { name: "Node.JS", img: NodeJs },
  { name: "PHP", img: PHP },
  { name: "Python", img: Python },
  { name: "Java", img: Java },
  { name: "Wordpress", img: Wordpress },
  { name: "Ruby", img: Ruby },
  { name: "Scala", img: Scala },
  { name: "Clojure", img: Clojure },
  { name: "MySQL", img: MySQL },
  { name: "Drupal", img: Drupal },
];

export const hostingPlanData = [
  {
    name: "Essential",
    price: 2.49,
    topFeatures: [
      "Standard Performance",
      "100 Websites",
      "100 GB SSD Storage",
      "Weekly Backups",
      "Unlimited Free SSL",
      "Unlimited Bandwidth",
      "Free Email",
      "Free Domain ($9.99 value)",
    ],
    security: [
      "Standard DDoS Protection",
      "Web Application Firewall",
      "Cloudfare Protected Nameservers",
      "Malware Scanner",
      "Secure Access Manager",
      "Free CDN",
      "Free Domain WHOIS Privacy Protection ($9.99 value)",
    ],
  },
  {
    name: "Business",
    price: 3.69,
    topFeatures: [
      "Standard Performance",
      "100 Websites",
      "100 GB SSD Storage",
      "Weekly Backups",
      "Unlimited Free SSL",
      "Unlimited Bandwidth",
      "Free Email",
      "Free Domain ($9.99 value)",
      "Free CDN",
    ],
    security: [
      "Standard DDoS Protection",
      "Web Application Firewall",
      "Cloudfare Protected Nameservers",
      "Malware Scanner",
      "Secure Access Manager",
      "Free CDN",
      "Free Domain WHOIS Privacy Protection ($9.99 value)",
    ],
  },
  {
    name: "Premium",
    price: 8.99,
    topFeatures: [
      "Standard Performance",
      "100 Websites",
      "100 GB SSD Storage",
      "Weekly Backups",
      "Unlimited Free SSL",
      "Unlimited Bandwidth",
      "Free Email",
      "Free Domain ($9.99 value)",
      "Free CDN",
      "Dedicated IP Address",
    ],
    security: [
      "Standard DDoS Protection",
      "Web Application Firewall",
      "Cloudfare Protected Nameservers",
      "Malware Scanner",
      "Secure Access Manager",
      "Free CDN",
      "Free Domain WHOIS Privacy Protection ($9.99 value)",
    ],
  },
];

export const customerReviewData = [
  {
    userName: "Sodiq David",
    company: "HARLY INCORPORATION",
    userImage: SodiqDavid,
    message:
      "Switching to HostShifts was a smart move. The performance, security, and support are top-notch. Zero downtime, user-friendly interface—highly recommend!",
  },
  {
    userName: "Sodiq David",
    company: "HARLY INCORPORATION",
    userImage: SodiqDavid,
    message:
      "Switching to HostShifts was a smart move. The performance, security, and support are top-notch. Zero downtime, user-friendly interface—highly recommend!",
  },
];

export const faqsData = [
  {
    question: "How do I choose the right hosting plan for my needs?",
    answer:
      "Selecting the right hosting plan depends on factors such as the size and purpose of your website, expected traffic, and growth projections. Our platform offers a variety of plans tailored to different requirements. Explore our detailed plan descriptions, or reach out to our support team for personalized guidance.",
  },

  {
    question:
      "What security measures are in place to protect my website and data?",
    answer:
      "We prioritize the security of your website and data. Our platform employs advanced security measures, including SSL encryption, regular security audits, firewall protection, and DDoS mitigation. Rest assured that your online presence is safeguarded against potential threat.    ",
  },
  {
    question: "Can I upgrade or downgrade my hosting plan as my needs change?",
    answer:
      "Absolutely. We understand that your hosting needs may evolve. Our platform allows for seamless plan upgrades or downgrades. Whether you're experiencing growth or looking to adjust resources, our flexible options ensure that you only pay for what you need.",
  },
  {
    question:
      "How does your platform handle website backups and data recovery?    ",
    answer:
      "Your website's data is of utmost importance to us. We perform regular automated backups to secure your information. In the event of data loss or security incidents, our robust backup system allows for quick and efficient data recovery, ensuring minimal disruption to your online presence.",
  },
  {
    question:
      "What level of customer support can I expect, and how can I reach your support team?      ",
    answer:
      "We take pride in our 24/7 customer support. Our team is readily available to assist you with any inquiries or concerns. You can reach our support team through various channels, including live chat, email, and phone. Expect prompt and knowledgeable assistance to ensure a smooth hosting experience.",
  },
];
