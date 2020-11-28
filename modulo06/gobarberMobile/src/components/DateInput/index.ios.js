import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';

import { format } from 'date-fns';

import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Piker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );
  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="evet" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Piker>
          <DatePickerIOS
            date={date}
            onDateChage={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locate="pt"
            mode="date"
          />
        </Piker>
      )}
    </Container>
  );
}
