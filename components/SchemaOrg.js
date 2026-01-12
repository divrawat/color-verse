import Head from 'next/head';

export default function SchemaOrg({ type, data = {} }) {
    // If data already has a @context, use it as is (for @graph or complex schemas)
    const finalSchema = data['@context']
        ? data
        : {
            '@context': 'https://schema.org',
            '@type': type || 'WebApplication',
            'name': 'ColorVerse',
            'description': 'A suite of professional CSS tools including gradient generators and color shade explorers.',
            'url': 'https://colorverse.com',
            'author': {
                '@type': 'Person',
                'name': 'Divyanshu Rawat',
                'jobTitle': 'Full Stack Developer',
                'url': 'https://github.com/divrawat'
            },
            ...data
        };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
            />
        </Head>
    );
}
