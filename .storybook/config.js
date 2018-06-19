import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function loadStories() {
    require('../stories/footer.stories');
    require('../stories/button.stories');
    require('../stories/invalidurl.stories');
}

configure(loadStories, module);
