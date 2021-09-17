import Head from "next/head";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";
import NewContact from "../components/NewContact";

const Index = () => {
  const contacts = useSelector((state) => state.contactsPage.contacts);

  const contactsElement = contacts.map((item) => {
    return (
      <Contact
        key={item.id}
        id={item.id}
        name={item.name}
        phone={item.phone}
        city={item.city}
      />
    );
  });

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <h2>Contacts</h2>
      <div>{contactsElement}</div>
      <div>
        <NewContact />
      </div>
    </>
  );
};

export default Index;
