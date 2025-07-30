import Section from "../../../Component/Section";
import useFetch from "../../../Component/useFetch";
import Title from "../../../Component/Title";
import Text from "../../../Component/Text";

export default function About() {
    const { data, fetching } = useFetch({ url: "http://localhost:3000/about", disabled: false });
    console.log(data, fetching);
    return (
        <Section>
            <Title>About</Title>
            <Text text={data} />
        </Section>
    )
}