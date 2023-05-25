import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@/components/Accordion';

const faqs = [
  {
    id: 1,
    header: 'How can I reset my password?',
    text: 'To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.',
  },
  {
    id: 2,
    header: 'What payment methods do you accept?',
    text: 'We accept various payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can choose your preferred payment method during checkout.',
  },
  {
    id: 3,
    header: 'How long does shipping take?',
    text: 'Shipping times can vary depending on your location and the shipping method selected. Generally, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.',
  },
  {
    id: 4,
    header: 'Can I return or exchange a product?',
    text: 'Yes, we have a hassle-free return and exchange policy. If you are not satisfied with your purchase, you can return the product within 30 days of receipt for a refund or exchange. Please refer to our Returns and Exchanges page for more details.',
  },
  {
    id: 5,
    header: 'How can I contact customer support?',
    text: 'You can reach our customer support team by phone at [phone number], by email at [email address], or through the contact form on our website. Our support team is available to assist you during business hours from Monday to Friday.',
  },
];

const GuideAccordion = () => {
  const [active, setActive] = useState(null);
  const handleToggle = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  return (
    <Contents>
      {faqs.map((faq) => {
        return <Accordion key={faq.id} active={active} handleToggle={() => handleToggle(faq.id)} faq={faq} />;
      })}
    </Contents>
  );
};

const Contents = styled.div`
  background: #ffffff;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
`;

export default GuideAccordion;
