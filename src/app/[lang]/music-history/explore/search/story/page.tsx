import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <>
            <h1>Search story</h1>
            <Link
                url={`/${lang}/music-history/explore/story/some-story`}
                label='Some story'
            />
        </>
    );
};

export default Page;
