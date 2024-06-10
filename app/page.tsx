import { Heading, VStack, IconButton } from '@chakra-ui/react';
import NoteGrid from '@/components/NoteGrid';
import AddNote from '@/components/AddNote';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Home() {
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        aria-label={'Theming icon'}
        isRound={true}
        size={'lg'}
        alignSelf={'flex-end'}
      />
      <Heading
        mb="8"
        fontWeight={'extrabold'}
        size={'2xl'}
        bgGradient={'linear(to-r, pink.500, pink.300, blue.500)'}
        bgClip={'text'}
      >
        DAR Application
      </Heading>
      <NoteGrid />
      <AddNote />
    </VStack>
  );
}
