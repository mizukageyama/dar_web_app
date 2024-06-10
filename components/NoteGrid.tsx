import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const NoteGrid = () => {
  const notes = [
    {
      title: 'Project Report',
      content: 'Finish the project report by Friday.',
    },
    {
      title: 'Marketing Meeting',
      content: 'Schedule a meeting with the marketing team.',
    },
    {
      title: 'Performance Review',
      content:
        'Complete the quarterly performance review. Gather feedback from team leads. Summarize the key points for the presentation.',
    },
    { title: 'Code Review', content: 'Code review session on Tuesday.' },
    {
      title: 'Product Demo',
      content: 'Prepare for the product demo next week.',
    },
    {
      title: 'User Guide',
      content: 'Update the user guide with the latest features.',
    },
    {
      title: 'Project Proposal',
      content:
        'Discuss the new project proposal in the next meeting. Coordinate with the finance team for budget approval.',
    },
    {
      title: 'Design Document',
      content:
        'Review the recent changes in the design document. Ensure all feedback has been incorporated. Confirm with the design team.',
    },
  ];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} py={50}>
      {notes.map((note, index) => (
        <Card key={index}>
          <CardBody>
            <Heading size="md">{note.title}</Heading>
            <Text>{note.content}</Text>
            <Button>View here</Button>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default NoteGrid;
