import React from 'react';
import { RecipeAboutTemplate as About } from 'chemistry-ui';

import translate from '../language/translate';

export default () => {
  const common = translate('common');
  const projectData = translate('projectData');

  return (
    <About
      literals={{
        about: common.about,
        participants: common.participants,
      }}
      authorData={{
        name: common.gabriel,
        email: 'romay.gabriel@gmail.com',
        url: common.cv,
      }}
      projectData={{
        description: projectData.description,
        url: 'https://github.com/W01fw00d/cooking-with-amateurs/blob/master/README.md',
        participants: [
          'Mateu',
          'Marina',
          'Jose Luis',
          'Iris',
          'Malén',
          'PJ',
          'Francina',
          'Lluis',
          'Marta',
          'Gabriel',
        ],
      }}
    />
  );
};
