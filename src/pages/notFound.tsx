import React from 'react';
import { NotFoundTemplate } from 'chemistry-ui';

import translate from '../language/translate';

export default () => {
    const common = translate('common');

    return <NotFoundTemplate literals={{
        notFound: common.notFound,
        goHome: common.goHome,
    }} />
};
