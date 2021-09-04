import YoutubeCard from 'Components/YoutubeCard';
import YoutubeSearchService from 'DomainServices/YoutubeSearch';
import { YoutubeSearchViewModel } from 'DomainServices/YoutubeSearch/Types';
import { Box, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [items, setItems] = useState<YoutubeSearchViewModel[]>([]);

  useEffect(() => {
    // YoutubeSearchService.search('.net core')
    //   .then((response) => {
    //     setItems(response);
    //   }).catch((error) => {
    //     console.error(error);
    //   });

    setItems([
      {
        id: '039aff5f-b77f-4a28-9423-8744564addec',
        youtubeId: 'PM1JKY41wnw',
        type: 'video',
        title: '.Net Framework VS .Net Core - Qual é a diferença ?',
        description: 'Curso completo asp.net MVC totalmente GRÁTIS: https://www.youtube.com/watch?v=rG2MKOqzCUs&list=PLPjAHj7dZXFTQ74WQGNXugsja3pp-OlPk Todas ...',
        publishedAt: '2020-08-07T09:00:16-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/PM1JKY41wnw/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/PM1JKY41wnw/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/PM1JKY41wnw/hqdefault.jpg',
      },
      {
        id: '0ccf1e8e-ec42-44e7-aa43-abd638c6090f',
        youtubeId: 'njlmcXxSHE4',
        type: 'video',
        title: 'Workshop: Asp .NET Core para Iniciantes - Introdução',
        description: 'Workshop com objetivo de ensinar os conceitos básicos sobre como se pode desenvolver uma pequena e simples aplicação com Asp .NET Core. Workshop ...',
        publishedAt: '2018-10-07T16:38:37-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/njlmcXxSHE4/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/njlmcXxSHE4/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/njlmcXxSHE4/hqdefault.jpg',
      },
      {
        id: 'bec6a35a-f3a9-4a66-8d0a-282c90705d8e',
        youtubeId: 'but7jqjopKM',
        type: 'video',
        title: 'Criando uma API com ASP.NET Core 3 e EF Core 3 em menos de 15 minutos | por André Baltieri #baltaio',
        description: 'Artigo: ASP.NET Core Dependency Injection https://balta.io/blog/aspnet-core-dependency-injection -- Já conhece meus cursos? https://balta.io/cursos Faça ...',
        publishedAt: '2019-10-28T11:00:14-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/but7jqjopKM/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/but7jqjopKM/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/but7jqjopKM/hqdefault.jpg',
      },
      {
        id: '3ff04555-e0ac-49a0-b044-17b2cba0445e',
        youtubeId: '79UWvR734wI',
        type: 'video',
        title: '.NET Core vs .NET Framework - What&#39;s the difference?',
        description: 'Getting Started with .NET Core course: https://www.iamtimcorey.com/p/getting-started-with-net-core Patreon: https://www.patreon.com/IAmTimCorey Mailing List: ...',
        publishedAt: '2019-03-15T09:00:01-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/79UWvR734wI/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/79UWvR734wI/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/79UWvR734wI/hqdefault.jpg',
      },
      {
        id: '72527aa1-82e5-4129-aef3-14595c3b9bbf',
        youtubeId: 'PL6n9fhu94yhVkdrusLaQsfERmL_Jh4XmU',
        type: 'playlist',
        title: 'ASP.NET core tutorial for beginners',
        description: 'Let´s gift education together https://www.patreon.com/kudvenkat Step by step asp.net core fundamentals course to help you build asp.net core mvc web ...',
        publishedAt: '2018-03-05T18:22:30-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/4IgC2Q5-yDE/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/4IgC2Q5-yDE/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/4IgC2Q5-yDE/hqdefault.jpg',
      },
      {
        id: 'ce0db756-06c9-4c68-a401-4029cf202d33',
        youtubeId: 'UZQqXPuKr1s',
        type: 'video',
        title: 'Criando sua primeira aplicação .NET Core no Linux | #AluraMais',
        description: 'A galera que trabalha com .NET consegue desenvolver em qualquer plataforma graças ao .NET Core. Aprenda com o Gabs como começar com o .NET Core no ...',
        publishedAt: '2019-05-27T11:00:05-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/UZQqXPuKr1s/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/UZQqXPuKr1s/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/UZQqXPuKr1s/hqdefault.jpg',
      },
      {
        id: 'fa03376c-d7e7-4b52-8ff1-b1a07a4643f8',
        youtubeId: 'ipbSwv09dDU',
        type: 'video',
        title: 'Entity Framework Core + Asp.NET Core Web API + SQL Server',
        description: 'Quer aprender Entity Framework Core + ASP.NET CORE Web API + SQL Server? ❤ - - - Seja Full-Stack Developer - - - ❤ http://www.programadamente.com ...',
        publishedAt: '2019-10-26T11:12:34-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/ipbSwv09dDU/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/ipbSwv09dDU/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/ipbSwv09dDU/hqdefault.jpg',
      },
      {
        id: 'fcb652ba-20d8-43e4-98bc-aa878709fb5a',
        youtubeId: 'C5cnZ-gZy2I',
        type: 'video',
        title: 'Learn ASP.NET Core 3.1 - Full Course for Beginners [Tutorial]',
        description: 'Learn ASP.NET Core 3.1 in this complete tutorial course for beginners. After learning about the history and basics of ASP.NET Core, you will learn how to build a ...',
        publishedAt: '2020-02-05T13:10:15-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/C5cnZ-gZy2I/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/C5cnZ-gZy2I/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/C5cnZ-gZy2I/hqdefault.jpg',
      },
      {
        id: '85e9cca6-fee3-4658-aca4-e30673b93ac3',
        youtubeId: 'PLXp1WuP49we99XfUxrBZWo5CaPhtW2qxE',
        type: 'playlist',
        title: 'Curso de Asp.Net Core 3.1.0',
        description: 'Curso de Asp.Net Core MVC.',
        publishedAt: '2019-08-01T19:37:10-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/B9r_oz68nMo/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/B9r_oz68nMo/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/B9r_oz68nMo/hqdefault.jpg',
      },
      {
        id: 'b2fa7c5f-c71e-4bfe-9e89-7ee9993ef513',
        youtubeId: 'kz-iw54NdO4',
        type: 'video',
        title: 'Criando Aplicação Basica com Asp.Net Core 3.1',
        description: 'Links: Artigo - https://yves.net.br/criando-aplicacao-basica-com-asp-net-core-mvc/ Murta Dev ...',
        publishedAt: '2020-05-02T16:07:09-03:00',
        defaultThumbnail: 'https://i.ytimg.com/vi/kz-iw54NdO4/default.jpg',
        mediumThumbnail: 'https://i.ytimg.com/vi/kz-iw54NdO4/mqdefault.jpg',
        highThumbnail: 'https://i.ytimg.com/vi/kz-iw54NdO4/hqdefault.jpg',
      },
    ]);
  }, [setItems]);

  return (
    <Box padding={[3, 6]}>
      <Grid container spacing={3}>
        { items && items.map(
          (item) => (
            <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
              <YoutubeCard
                title={item.title}
                thumbnail={item.mediumThumbnail}
                publishedAt={item.publishedAt}
                onSubscribe={() => alert('TODO: Executar Subscription/Create')}
              />
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};

export default Home;
