function lockedProfile() {
    (async () => {
        const profilesData = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const profiles = await profilesData.json();
        console.log(profiles);

    })();

    function createHtmlProfile(userId) {

    }




}
