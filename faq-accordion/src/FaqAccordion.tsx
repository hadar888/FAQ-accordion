import { Accordion } from "@mantine/core";
import { Faq } from "./modals/Faq";
import { useState } from "react";

interface FaqAccordionProps {
    initialFaqs: Faq[];
}

const FaqAccordion = (props: FaqAccordionProps) => {
    const {initialFaqs} = props;
    const [faqs, setfaqs] = useState(initialFaqs);

    const onAccordionItemClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {        
        const clickedAccordionItemQuestion = event.currentTarget.value;
        const newFaqs = faqs.map((item) => {return item.question === clickedAccordionItemQuestion ? 
            {...item, isActive: !item.isActive} : item});
        setfaqs(newFaqs);
    };

    return (
        <Accordion multiple>
            {
                faqs.map((item, index) => {
                    return (
                        <Accordion.Item key={item.question} value={item.question} styles={{
                            item: {
                                borderBottom: '1px solid #fafafa',
                                ...(index === faqs.length - 1 && {
                                    borderBottom: '0px',
                                })
                            }
                        }}>
                             <Accordion.Control
                                value={item.question}
                                onClick={onAccordionItemClick}
                                chevron={item.isActive ? 
                                    <img src="icon-minus.svg" alt="minus"></img> : 
                                    <img src="icon-plus.svg" alt="plus"></img> 
                                }
                             >
                                {item.question}
                             </Accordion.Control>
                            <Accordion.Panel>{item.answer}</Accordion.Panel>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
};

export default FaqAccordion;
