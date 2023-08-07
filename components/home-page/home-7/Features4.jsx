import Link from "next/link";
import Image from "next/image";


const featureData = [
  {
    id: 1,
    icon: "/images/features/expensis.png",
    title: "Employees can easily create and send requisitions:",
    text: "KAISPE's Purchase Requisition App offers an intuitive and user-friendly interface, making it easy for employees to create purchase requisitions quickly and efficiently. The app is designed to streamline the procurement process, reducing errors and saving time.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/features/configuration.png",
    title: "Multiple workflow configuration options: ",
    text: "This app provides multiple workflow configuration options for reviewers to approve or reject purchase requisitions, ensuring that the procurement process is in line with the organization's policies and procedures.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/features/receipt.png",
    title: "Easy search for inventory: ",
    text: "The app allows employees to select a product from the existing inventory or type in the product name if the product is not available in the inventory. This feature enables employees to quickly add the purchase request for the products they need without having to spend time searching for them.",
    backgroundColor: "#F7EDFF",
  },

  {
    id: 4,
    icon: "/images/features/Multi_Language.png",
    title: "Available in Tablet and Mobile versions: ",
    text: "KAISPE's Purchase Requisition mobile App is available in both tablet and mobile versions, enabling employees to raise requisitions from anywhere at any time. This feature allows for greater flexibility and convenience, making it easier for employees to complete procurement requests on the go.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 5,
    icon: "/images/features/categories.png",
    title: "Multi-language, multi-site, and multi-currency features: ",
    text: "The app offers multi-language, multi-site, and multi-currency features, making it suitable for organizations with global operations. This feature ensures that the procurement process is standardized across all locations and helps to reduce language barriers and currency conversion issues.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 6,
    icon: "/images/features/workflow.png",
    title: "Easily integrated with Microsoft Dynamics 365:  ",
    text: "The app can be easily integrated with Microsoft Dynamics 365 F&O, Microsoft Dynamics 365 Business Central, and other ERPs. It makes it simple to incorporate into existing systems and workflows.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 7,
    icon: "/images/features/Recall_history.png",
    title: "Flexible pricing options: ",
    text: "KAISPE's Purchase Requisition App offers flexible pricing options, making it accessible to organizations of all sizes and budgets. This feature ensures that organizations can choose a pricing plan that fits their specific needs and requirements.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 8,
    icon: "/images/features/Multi_Currency.png",
    title: "Support for both service and inventory items: ",
    text: "The app supports both service and inventory items, making it suitable for organizations that need to manage different types of procurement requests.",
    backgroundColor: "#FFEBDB",
  },



];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20" style={{paddingLeft:"0px"}}>
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
      >
        <img src={icon} alt="icon" className="lazy-img" style={{width:"50px", height:"50px"}}/>
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-10"  style={{textAlign:"justify"}}>{text}</p>
      {/* <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a> */}
      
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
