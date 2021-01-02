import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import PageHead from '../components/PageHead.js';

//TODO: incorporate the different wordings found here: https://www.effectivealtruism.org/faqs-criticism-objections/
const FAQs = [
    {
        question: "What if I think one of those approaches you listed won’t help people much, or would actually be harmful?",
        answer: <p>OK, probably some others in the community will agree with you! If you have good reasons for thinking that and explain them, you’ll persuade people and help us do a better job of improving the world. Our whole goal is to be responsive to good evidence and analysis, so we debate a lot and change our minds frequently.</p>
    },
    {
        question: "Do you think everyone should do this?",
        answer: <p>Some people think that helping to improve the world as much as possible is a duty; some just see effective altruism as an exciting opportunity to help others. However you feel, we would love you to join us in improving the world in high-impact ways!</p>
    },
    {
        question: "Are you saying I should spend all of my money or time on this?",
        answer: <p>Usually doing more to help others is better, but you shouldn’t give up the things that make you happy in life, or neglect your commitments to your friends and family. A common minimum standard to be considered an aspiring ‘effective altruist’ is to give 10% of your income, or noticeably shift your career path in order to have more social impact. If you are in a difficult circumstance yourself, the most valuable thing you can do may just be to improve your own life, and focus on helping others later once you’re in a stronger position to do so.</p>
    },
    {
        question: "Isn’t this incredibly obvious?",
        answer: <p>Many of us find it fairly obvious and uncontroversial, but most people don’t seem to live in this way. Either they don’t dedicate much of their efforts into helping others, or they choose what problem to work on based on what they find interesting without doing proper research and comparing their different options first. If it does seem obvious to you though, great! You’ll probably enjoy joining our community. Our goal is to improve the world – not define effective altruism to be <a href="http://www.effective-altruism.com/ea/l7/why_the_triviality_objection_to_ea_is_beside_the/" target="_blank">controversial for the sake of it</a>.</p>
    },
    {
        question: "Do you only do things that are ‘proven’ to work?",
        answer: <p>No, although a higher likelihood of success is better, holding everything else equal. Some people have a strong preference for approaches that have hard empirical evidence behind them, and are skeptical of those which don’t. This is because they think our ability to predict what actions will be helpful and which won’t before they are tested is very limited. But others think the most high-impact opportunities will involve more experimental or ‘speculative’ approaches, such as scientific research or political advocacy. Across society as a whole there clearly needs to be a mixture of both.</p>
    },
    {
        question: "Is effective altruism just about making money and giving donations to charity?",
        answer: <p>That’s one way you might try have the most impact, and one that people have <a href="https://80000hours.org/articles/earning-to-give/" target="_blank">explored in detail</a>, because there was existing research to build on. But other approaches, like going into politics or starting a business that provides some new useful product, might work even better for some people. This is a <a href="https://forum.effectivealtruism.org/posts/k6bBgWFdHH5hgt9RF/peter-hurford-thinks-that-a-large-proportion-of-people" target="_blank">topic of active debate</a>.</p>
    },
    {
        question: "Aren’t you neglecting changing the system as a whole?",
        answer: <p>No. There is nothing about effective altruist principles that rejects changing social systems for the better, and some of us are <a href="https://80000hours.org/2015/07/effective-altruists-love-systemic-change/" target="_blank">already working on this</a>. It is early days for the movement, and to begin with a lot of research and donations went to approaches that are ‘proven’ to work, such as scaling up rigorously tested health treatments – sometimes by providing technical assistance to governments in the developing world. However, as we get more skilled in evaluating what works and what doesn’t, more of us are shifting into approaches that involve systemic change, in some cases quite dramatic ones.</p>
    },
    {
        question: "What if I don’t have enough money to give anything?",
        answer: <p>You shouldn’t put yourself in a bad situation in order to donate. You’ll probably do more good for others if you focus on progressing your own career first, leaving you with more money for both yourself and others. Alternatively, there are many opportunities for direct work that don’t involve donating money. It bears keeping in mind, however, that you may be <a href="https://howrichami.givingwhatwecan.org/how-rich-am-i" target="_blank">richer on a global scale than you think</a>.</p>
    },
    {
        question: "Have effective altruist researchers looked into [insert cause here]?",
        answer: <p>Maybe, but maybe not. There are thousands of possible ways to have a large impact and it is taking time to look into them thoroughly and do proper comparisons. The coverage of our research is growing every year though, as more people work on cause prioritisation research. The websites to search to see if your organisation or cause of interest has been discussed include:
            <ul>
                <li><a href="https://www.givewell.org/" target="_blank">GiveWell</a></li>
                <li><a href="http://www.80000hours.org/" target="_blank">80,000 Hours</a></li>
                <li><a href="http://www.givingwhatwecan.org/" target="_blank">Giving What We Can</a></li>
                <li><a href="http://www.openphilanthropy.org/" target="_blank">Open Philanthropy Project</a></li>
                <li><a href="http://globalprioritiesproject.org/" target="_blank">Global Priorities Project</a></li>
                <li><a href="http://www.copenhagenconsensus.com/" target="_blank">Copenhagen Consensus</a></li>
            </ul>
        Or, try searching in google for ‘effective altruism’ and the cause you’re interested in.</p>
    },
    {
        question: "What if everyone focused on this one cause or charity you’re suggesting? Wouldn’t that be silly?",
        answer: <p>Yes, it would be silly. We offer recommendations about what we think are the best available opportunities to help, given what other people are already doing right now. As more people take the opportunities we recommend, they will stop being so neglected, and the value of allocating more resources to them will go down. At that point we would be enthusiastic to do more research and change our recommendation to whatever is the new best thing.</p>
    },
    {
        question: "How do I compare something that is sure to work, with something that might work, but would be more valuable if it did?",
        answer: <p>In brief, the <a href="https://en.wikipedia.org/wiki/Expected_value" target="_blank">expected value</a> of an approach is the likelihood of it succeeding multiplied by the value if it does. So, two things would be equally good if one was half as likely to work, but twice as valuable if it did. Of course, estimating the likelihood of success is not easy, and we need to be careful not to be overconfident about our own plans. Estimating the likelihood of success of new projects is the kind of thing professional effective altruist researchers work on.</p>
    },
    {
        question: "Are you saying [insert cause here], or the thing I’m doing to improve the world, isn’t the most effective?",
        answer: <p>Maybe. We each have a range of opportunities available to us to help others, and some will do so much more than others. If you haven’t actively tried to pick the one that has the largest impact, it’s unlikely that you would have ended up doing the best thing by chance. It’s hard enough to choose the best option even when you dedicating a lot of time into figuring out which it is! You could probably do even more good if you evaluated and compared multiple different options and chose the one that came out top. This isn’t a criticism of the work you’re already doing, it’s just an exciting opportunity to help even more people!</p>
    },
    {
        question: "Does effective altruism require personal sacrifice?",
        answer: <p>Altruism can require spending your money or your time differently than you would otherwise, and for some people that might be a sacrifice. But for many people, spending your life working to improve the world provides a clear and meaningful goal, and a friendly social group to collaborate with, that might otherwise be lacking. For such people trying to help others as much as possible could be more purposeful, fulfilling and maybe even more fun, than any of the alternatives. First and foremost you have to make sure you stay enthusiastic and don’t burn out, because if you do you won’t be able to help anyone. Regardless, there’s nothing desirable about sacrifice in and of itself.</p>
    },
    {
        question: "Doesn’t charity start at home?",
        answer: <p>There’s nothing bad about helping people you know, or even yourself. But often the opportunities to help people far away are vastly greater than the opportunities to help people near you, especially if you live in a wealthy country. For example for $1,000 you could <a href="http://www.givedirectly.org/" target="_blank"> double the annual income</a> for a family engaged in subsistence agriculture in Kenya. This can be life-transforming for several people. If you live in a wealthy country, it’s hard for $1,000 to achieve anywhere near as much in your local community. Most effective altruists think that everyone is equally important, no matter where they live or whether we are friends with them.</p>
    },
    {
        question: "Isn’t this kind of calculating and impersonal?",
        answer: <p>Well it’s true that we do calculations, and we don’t always know the people we are assisting. But most of us are drawn to do this because we have a high level of empathy for others’ lives, regardless of where they are. We want to figure out where we can help the most because we care a lot.</p>
    },
    {
        question: "Are any of you involved in politics?",
        answer: <p>Yes, many of us are interested in politics, and some are actively pursuing careers in politics across a range of parties, or through research into the most valuable policy changes to pursue.</p>
    },
    {
        question: "What if I don’t think ‘charity’ works well in general?",
        answer: <p>It’s possible for most charities to be ineffective, something that many of us believe, but a small number to achieve amazing outcomes. That’s why it’s so important to find the best ones. If you are extremely skeptical of non-profits though, effective altruism isn’t about non-profits specifically – non-profits are just one possible route to social impact.</p>
    },
    {
        question: "What does it mean to help people? Or, what is good?",
        answer: <p>Effective altruists focus on improving lives. Everyone would agree that, all other things equal, reducing suffering and increasing happiness is good. There might be other things of value as well – promoting art, or preserving the natural environment – but that’s not what effective altruism is about. It can be hard to impartially compare different benefits received by different people, but we <a href="https://80000hours.org/articles/the-meaning-of-making-a-difference/" target="_blank">attempt to be as neutral as we can when doing that too</a>.</p>
    },
    {
        question: "Who are these ‘others’ you are trying to help?",
        answer: <p>Other people alive now around the world are obviously included. Most also think that non-human animals matter – though usually each counting for less than one human – as well as people who might live in the future. The most popular criterion for inclusion is ‘being conscious’, though of course what consciousness is and who is conscious is not a solved problem.</p>
    },
    {
        question: "Are you all vegetarians?",
        answer: <p>A significant number are, because they think farmed animals live horrible lives, especially when confined in factory farms, or that animal agriculture is harmful for the environment. But at the same time, many are not. Some of us are researching <a href="http://animalcharityevaluators.org/" target="_blank">how best to help non-human animals</a>.</p>
    },
    {
        question: "Is this utilitarianism?",
        answer: <p>Unlike <a href="https://en.wikipedia.org/wiki/Utilitarianism" target="_blank">utilitarianism</a>, effective altruism doesn’t necessarily say that helping others is obligatory, and effective altruism doesn’t say that it’s permissible to violate people’s rights even if doing so would lead to the best consequences. Utilitarians are usually enthusiastic about the idea of effective altruism, but many effective altruists are not utilitarians and care intrinsically about things other than welfare, such as violation of rights, freedom, inequality, personal virtue and more. In practice, most people give a bit of weight to a range of different ethical theories.</p>
    },
    {
        question: "How are the people you’re trying to help involved in decision-making?",
        answer: <p>The possibility that we don’t actually understand and address the needs of the people we are trying to help is real, and a risk we have to remain constantly vigilant about. If we don’t listen to or understand recipients we will be less effective, which is the opposite of our goal. Different groups have different ways of dealing with this. Some people support GiveDirectly because it gives cash to people in poverty, leaving it entirely up to them how they spend the money. This is seen as empowering people in poverty to a greater extent than choosing services that may ultimately not be desired by the local community. Others provide basic health services, such as vaccinations or micronutrients, that they regard as so clearly good it is very unlikely the recipients wouldn’t value them (and in any case, could reject if they wanted). They then hope that better health will empower people to improve aspects of their own circumstances in ways we as outsiders cannot. In cases where the above don’t apply, you have to conduct detailed impact evaluations to see how the recipients actually feel about the service that purports to help them. Of course such surveys won’t always be reliable. In other cases where people are trying to help non-human animals or future generations, these issues can be even more difficult, and people do their best to predict what they would want if they could speak to us. Obvious cases would include pigs not wanting to be permanently confined to ‘gestation crates’ in which they cannot turn around, or future generations not wanting to inherit a planet on which humans cannot easily live.</p>
    },
    {
        question: "Is effective altruism left-wing, right-wing, libertarian, conservative, or something else?",
        answer: <p>None of the above. We have people participating from across the political spectrum. What unifies us is having an open mind and a pragmatic approach to helping others. People of many political persuasions share that.</p>
    },
    {
        question: "I already pay my taxes. Why should I have to do more?",
        answer: <p>Even after paying our taxes, many of us find we still have plenty of capacity and desire to help people. For some of us that is based in excitement about the opportunities we see to improve people’s lives; for others it is based on a sense of duty towards those less fortunate than ourselves. In many cases we support worthwhile causes which are simply not addressed by governments.</p>
    },
    {
        question: "Are there religious effective altruists?",
        answer: <p>Yes, there are effective altruists from a variety of religious backgrounds. Many religions have historically incorporated charity or tithing and promoted helping others, and religious effective altruists think it’s important to observe these duties as best they can. That said, there are also many non-religious effective altruists.</p>
    },
    {
        question: "Why should I join the effective altruist movement? I’m already planning on doing a lot of good on my own, and I’m not sure your approach is best.", answer: <p>We are a friendly, motivated and well-read bunch of people. Joining the movement has a number of advantages to going in on your own:

        <ul>
                <li>There are many skilled people who might join you to help with your projects.</li>
                <li>If you offer good criticism or suggestions, you have the potential to influence the rest of us to adopt whatever approach you think is more effective.</li>
                <li>We can pool our resources to conduct research that can help us all figure out how to have more impact.</li>
                <li>You can learn by watching how other people in the community think or behave. It’s nice to have like-minded friends, and they might keep you motivated when things are hard.</li>
            </ul>

        That said, one can engage in effective altruism without taking any interest in the community. If you do a lot of good without us, that’s great!</p>
    }
]

export default () => (
    <>
        <PageHead pageTitle="FAQ" />

        <h2>Frequently Asked Questions</h2>
        <Accordion allowMultipleExpanded allowZeroExpanded>
            {FAQs.map(entry => (
                <AccordionItem key={FAQs.indexOf(entry)}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ cursor: "pointer" }}>
                            <p className="hover-raise"><u>{entry.question}</u></p>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {entry.answer}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
);