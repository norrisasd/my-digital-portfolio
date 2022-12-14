import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  VStack,
  Divider,
} from '@chakra-ui/react';
let asp = require('../../../Images/asp-logo.png')
let mssql = require('../../../Images/mssql-logo.png')
let ado = require('../../../Images/ado-logo.jpg')
let quartz = require('../../../Images/quartz-logo.png')
const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title?: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box id='learnings'>
      <Container maxW={'7xl'} pt={24} mb={'12'} as={Stack} spacing={12} h='calc(100vh)' centerContent justifyContent={'center'}>
        <Stack spacing={0} align={'center'}>
          <Heading>What I Learned</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>ASP.NET MVC</TestimonialHeading>
              <TestimonialText>
                One of the things I learned in my experience at lexmark is ASP.NET MVC which is a web application framework for web development.z
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={asp}
              name={'ASP.NET MVC'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>ADO.NET</TestimonialHeading>
              <TestimonialText>
                ADO.NET is a data access technology for relational and non relational systems. Using ADO.NET Entity framework made my experience in accessing database easier.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={ado}
              name={'ADO.NET'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Microsoft SQL</TestimonialHeading>
              <TestimonialText>
                Learning Microsoft SQL queries and keywords are one of the things I needed to explore to enhance my knowledge about the project.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={mssql}
              name={'Microsoft SQL Server'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>QUARTZ.NET</TestimonialHeading>
              <TestimonialText>
                Job Scheduling is one things needed to be integrated in our project, so learning QUARTZ.NET really helps my understanding in cron scheduling and etc.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={quartz}
              name={'QUARTZ.NET'}
            />
          </Testimonial>
        </Stack>
        <Divider marginTop="5" />
        <VStack spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg" color={'gray.300'}>
            I have also expanded my knowledge about relational databases with the guidance of my mentor. All the task that was assigned to me was a great experience especially parsing text and XML files since it enhances my logic. Furthermore, all the standup meetings, demos and communication with my mentor, colleagues, and the stakeholder, really improves my intrapersonal skills.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}