import ghpages from 'gh-pages'

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/saesak/saesak.github.io', // Update to point to your repository  
        user: {
            name: 'Hyun Ki Cho', // update to use your name
            email: 'matthewcho2000@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)