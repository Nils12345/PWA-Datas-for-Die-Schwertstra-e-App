        const installButton = document.getElementById('install');
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', evt => {
            event.preventDefault();
            deferredPrompt = evt;
            installButton.style.display = 'block';
        });

        installButton.addEventListener('click', async () => {
            await deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            console.log(choiceResult.outcome);
        });

        navigator.serviceWorker.register('sw.js');
