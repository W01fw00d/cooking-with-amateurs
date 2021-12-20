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
        name: projectData.name,
        description: projectData.description,
        url: common.codeRepositoryUrl,
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
