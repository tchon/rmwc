import React from 'react';
import { mount } from 'enzyme';
import {
  List,
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListItemMeta,
  SimpleListItem
} from './';

describe('List', () => {
  it('renders', () => {
    mount(
      <List>
        <ListItem ripple>
          <ListItemGraphic />
          <ListItemText>Cookies</ListItemText>
          <ListItemMeta />
        </ListItem>
      </List>
    );
  });

  it('SimpleListItem renders', () => {
    mount(
      <List>
        <SimpleListItem
          graphic="star_border"
          text="Cookies"
          secondaryText="Chocolate chip"
          meta="info"
        />
      </List>
    );
  });

  it('can have custom classnames', () => {
    [List, ListItem, ListItemText].forEach(Component => {
      const el = mount(<Component className={'my-custom-classname'} />);
      expect(!!~el.html().search('my-custom-classname')).toEqual(true);
    });
  });

  it('can be activated', () => {
    const el = mount(<ListItem activated />);
    expect(!!~el.html().search('mdc-list-item--activated')).toEqual(true);
  });

  it('can be selected', () => {
    const el = mount(<ListItem selected />);
    expect(!!~el.html().search('mdc-list-item--selected')).toEqual(true);
  });
});
