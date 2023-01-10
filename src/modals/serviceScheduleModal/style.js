import styled from "styled-components";

export const ScheduleModal = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;

    width: 600px;
    min-height: 500px;
    height: max-content;
    gap: 30px;

    background: #fff;

    .header {
      background: var(--color-primary);
      color: #fff;
      padding: 30px;
      text-align: center;
    }

    .modalBody {
      display: flex;
      margin: 0 60px;
      flex-direction: column;
      gap: 80px;
      line-height: 30px;

      .modalDescription {
        p {
          font-size: 12px;
        }
      }

      .scheduleData {
        display: flex;
        gap: 30px;
        /* align-items: center; */
        justify-content: center;

        input {
          /* border: 1px solid black; */
        }
      }
      .confirmDate {
        margin: 0 auto;
        margin-top: 90px;

        button {
          background: var(--color-primary);
          border: none;
          padding: 10px 30px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;
