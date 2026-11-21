import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { SxProps, Theme } from '@mui/material';
import {
  headerTextContainerSx,
  paperTextContainerSx,
  headerTextSx,
  paperTextSx,
} from '../../common/styles/SharedStyles';

const roleTitleSx: SxProps<Theme> = {
  fontSize: '2em',
  p: 2,
  mt: 1,
  fontFamily: 'Quicksand, sans-serif',
  color: 'rgb(192, 224, 237)',
};

const roleDateSx: SxProps<Theme> = {
  fontSize: '1.1em',
  color: 'rgb(192, 224, 237)',
  fontFamily: 'Roboto, sans-serif',
  mt: 0,
  pt: 0,
  pb: 0,
  pl: 3,
  pr: 3,
  lineHeight: '45px',
};

const bulletListSx: SxProps<Theme> = {
  fontSize: '1.3em',
  color: 'white',
  fontFamily: 'Roboto, sans-serif',
  mt: 0,
  pt: 0,
  pb: 3,
  pl: 5,
  pr: 3,
  lineHeight: '45px',
};

const Experience = () => {
  return (
    <>
      <Grid container direction='column'>
        <Grid item xs sx={headerTextContainerSx}>
          <Typography sx={headerTextSx}>Experience</Typography>
        </Grid>
        <Grid item xs>
          <Card sx={paperTextContainerSx}>
            <CardContent>
              <Typography sx={roleTitleSx}>
                Ito.ai | Remote Software Engineer
              </Typography>
              <Typography sx={roleDateSx}>May 2026 – Present</Typography>
              <Typography sx={paperTextSx}>
                Building AI quality, evaluation, and automation platforms that
                help customer engineering teams ship safer software faster.
              </Typography>
              <Typography component='ul' sx={bulletListSx}>
                <li>
                  <strong>AI Test Quality:</strong> Rebuilt an AI QA
                  agent&apos;s bug-report evidence to derive from source code
                  and match an adversarial LLM judge&apos;s verdicts; shipped
                  via shadow-mode rollout with telemetry, contributing to a
                  record 37% customer bug-resolution rate.
                </li>
                <li>
                  <strong>Internal API Service:</strong> Designed and launched a
                  TypeScript/Fastify service on ECS Fargate (AWS CDK) with
                  Argon2id API keys and rate-limited, retry-safe endpoints to
                  trigger and cancel pipeline runs; moved the 11K-line
                  pipeline-launch code path into a shared package using Claude
                  to improve maintainability.
                </li>
                <li>
                  <strong>LLM Evaluation Platform:</strong> Built a Langfuse
                  evaluation platform (golden datasets, test-plan
                  recall/precision scoring, planner-only replay, prompt CI gate)
                  to validate cost-efficient models before release, enabling a
                  13× drop in cost per run (to $1.59) and a 62% drop in average
                  runtime (101 → 38 min).
                </li>
                <li>
                  <strong>AI Automation:</strong> Built an MCP server letting AI
                  agents investigate, trigger and cancel test runs across 658
                  customer repos, and an AI-driven workflow that auto-opens fix
                  PRs when dependency security audits fail, improving deployment
                  speed by 2x.
                </li>
                <li>
                  <strong>Engineering Leadership:</strong> Shipped 151 PRs and
                  reviewed 113 in 4 months on an 8-engineer team; created the
                  company&apos;s Claude Code plugin marketplace, standardizing 5
                  AI skills across all engineers.
                </li>
              </Typography>

              <Typography sx={roleTitleSx}>
                Amazon | Software Development Engineer II
              </Typography>
              <Typography sx={roleDateSx}>July 2022 – May 2026</Typography>
              <Typography sx={paperTextSx}>
                Led ownership of large-scale security log data platforms and
                AI-assisted tooling that cut cost, toil, and operational load.
              </Typography>
              <Typography component='ul' sx={bulletListSx}>
                <li>
                  <strong>Big Data Leadership:</strong> Lead ownership of
                  security log data platforms processing 100+PB/day; engineered
                  an optimized ingestion platform that realized $7.12M in annual
                  cost savings.
                </li>
                <li>
                  <strong>AI Automation:</strong> Architected internal tools
                  using AWS Bedrock and Claude Sonnet, reducing manual developer
                  toil by 8 hours per week.
                </li>
                <li>
                  <strong>Scalability &amp; Migration:</strong> Unblocked the
                  migration of 300+ critical datasets via custom file compaction
                  and streaming implementations using FS2 and Scala.
                </li>
                <li>
                  <strong>Operational Excellence:</strong> Reduced monthly
                  operational ticket volume by 106/month through automated alarm
                  analysis and infrastructure hardening.
                </li>
                <li>
                  <strong>Mentorship:</strong> Actively lead sprint grooming,
                  design reviews, and the technical growth of junior SDEs.
                </li>
              </Typography>

              <Typography sx={roleTitleSx}>
                Amazon | Software Development Engineer
              </Typography>
              <Typography sx={roleDateSx}>June 2021 – July 2022</Typography>
              <Typography sx={paperTextSx}>
                Built fulfillment-center risk systems and deployment automation
                for high-throughput AWS services.
              </Typography>
              <Typography component='ul' sx={bulletListSx}>
                <li>
                  <strong>System Design:</strong> Developed a global risk
                  assessment module (AWS Lambda, SQS, DynamoDB) supporting
                  4,000+ fulfillment center executions.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Boosted AWS Lambda
                  performance by 80% through eager initialization and API
                  tuning, managing a load of 6B+ monthly requests.
                </li>
                <li>
                  <strong>CI/CD:</strong> Built robust canary infrastructure
                  with automated rollbacks, cutting manual deployment overhead
                  by 50%.
                </li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs sx={headerTextContainerSx}>
          <Typography sx={headerTextSx}>Technical Skills</Typography>
        </Grid>
        <Grid item xs>
          <Card sx={paperTextContainerSx}>
            <CardContent>
              <Typography sx={paperTextSx}>
                <strong>Languages:</strong> Scala, Kotlin, Java, Python,
                TypeScript
              </Typography>
              <Typography sx={paperTextSx}>
                <strong>AWS:</strong> Bedrock (Claude Sonnet), Lambda, DynamoDB,
                SQS, SNS, AppSync, CloudWatch, API Gateway, ECS Fargate, CDK
              </Typography>
              <Typography sx={paperTextSx}>
                <strong>Data &amp; infra:</strong> FS2, Spark, Hadoop, Docker,
                Kubernetes, CI/CD, Parquet, Fastify, Langfuse
              </Typography>
              <Typography sx={paperTextSx}>
                <strong>Frontend:</strong> React, UI/UX Design, Responsive
                Design
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;
