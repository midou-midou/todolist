import React from 'react';
import { shallow } from 'enzyme';
import TDTitle from '../TDTitle'

describe('TDTitle component', () => {
    describe('is title', () => {
      it('title is string', () => {
        const tdtitle = shallow(<TDTitle/>);
        expect(tdtitle.type()).to.equal('span');
      })
    });
  });