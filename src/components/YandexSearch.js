import React, {useState, useRef} from 'react';
import {withYMaps} from 'react-yandex-maps';
import {Column, Layout} from '@ui/layout';
import {ContentLight} from '@ui/dropdown';
import {Input} from '@ui/input';
import styled from '@emotion/styled';
import OnOutsideClick from '@ui/layer/src/OnOutsideClick';
import Dropdown from './Dropdown';
import SuggestView from './SuggestView';
import {update, change, select} from './handlers';
import {SuggestProps} from './types';

const Wrapper = styled('div')({
  position: 'relative',
  width: '100%',
});

const Suggest = ({
  color,
  disabled,
  id,
  readOnly,
  placeholder,
  value,
  ymaps,
  onChange,
  onSuggest,
}) => {
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const suggestRef = useRef();
  const onUpdate = update(ymaps, setItems);
  const content = [];
  content.push(
    <Input
      id={id}
      key='smart-input'
      disabled={disabled}
      value={value}
      onChange={
        disabled
          ? null
          : (targetValue) => change(targetValue, onUpdate, onChange)
      }
      color={color}
      readOnly={readOnly}
      placeholder={placeholder}
      onClick={() => setToggle(true)}
    />
  );

  if (
    toggle &&
    items.length > 0 &&
    !(items[0] !== value && items.length === 1)
  ) {
    content.push(
      <OnOutsideClick
        key='smart-suggest'
        target={suggestRef.current}
        onOutsideClick={() => setToggle(false)}
      >
        <Dropdown>
          <ContentLight borderRadius='s' width='large' noPopup>
            <Column>
              <Layout basis='12px' />
              {items.map((s) => (
                <SuggestView
                  key={Math.random()}
                  onClick={() =>
                    select(s.value, onSuggest, onUpdate, onChange, setToggle)
                  }
                >
                  {s.displayName}
                </SuggestView>
              ))}
              <Layout basis='12px' />
            </Column>
          </ContentLight>
        </Dropdown>
      </OnOutsideClick>
    );
  }

  return <Wrapper ref={suggestRef}>{content}</Wrapper>;
};
