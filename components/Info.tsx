import Vup from "@/types/Vup";
import ConfidenceThree from "@spectrum-icons/workflow/ConfidenceThree";
import DataUser from "@spectrum-icons/workflow/DataUser";
import User from "@spectrum-icons/workflow/User";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import {
  Avatar,
  Content,
  Flex,
  Heading,
  IllustratedMessage,
  View,
  Image,
  Text,
  Divider,
  Badge,
  Well,
  ActionGroup,
  Item,
  ActionButton,
} from "@adobe/react-spectrum";
import NotFound from "@spectrum-icons/illustrations/NoSearchResults";

export default function Info({
  vups,
  onFansImage,
  onFansHistory,
  onCoverage,
  onGuardHistory,
}: {
  vups: Vup[];
  onFansImage: (vup: Vup) => void;
  onFansHistory: (vup: Vup) => void;
  onGuardHistory: (vup: Vup) => void;
  onCoverage: (vups: Vup[]) => void;
}) {
  if (vups.length === 0) return <Empty />;
  if (vups.length === 1)
    return (
      <MonoInfo
        vup={vups[0]}
        onFansImage={onFansImage}
        onFansHistory={onFansHistory}
        onGuardHistory={onGuardHistory}
      />
    );
  return <MultiInfo vups={vups} onCoverage={onCoverage} />;
}

function Empty() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No VUp chosen</Heading>
      <Content>
        Try choose one vup to view its details, or choose more to compare.
      </Content>
    </IllustratedMessage>
  );
}

function MonoInfo({
  vup,
  onFansImage,
  onFansHistory,
  onGuardHistory,
}: {
  vup: Vup;
  onFansImage: (vup: Vup) => void;
  onFansHistory: (vup: Vup) => void;
  onGuardHistory: (vup: Vup) => void;
}) {
  return (
    <View height={"100%"}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={"size-150"}
        height={"100%"}
      >
        <Avatar src={vup.avatar} size={75} marginTop={"size-250"} />
        <Heading level={2} margin={0}>
          {vup.name}
        </Heading>
        <Flex direction={"row"} gap={"size-75"}>
          <Text>
            <DataUser size="XS" />
            <Text> uid: {vup.uid}</Text>
          </Text>
          <Divider orientation="vertical" size="S" />
          <Text>
            <User size="XS" />
            <Text> 粉丝数: {vup.fansCount}</Text>
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"size-75"} alignItems={"center"}>
          <Badge variant={"info"}>
            <ConfidenceThree />
            <Text>Level {6}</Text>
          </Badge>
        </Flex>
        <Well>
          <Text>{vup.description}</Text>
        </Well>

        <Flex
          marginTop={"size-150"}
          marginBottom={"size-150"}
          direction={"column"}
          gap={"size-150"}
        >
          <ActionButton onPress={() => onFansImage(vup)}>
            <Text>粉丝画像</Text>
            <ChevronRight />
          </ActionButton>
          <ActionButton onPress={() => onFansHistory(vup)}>
            <Text>人气走向</Text>
            <ChevronRight />
          </ActionButton>
          <ActionButton onPress={() => onGuardHistory(vup)}>
            <Text>大航海</Text>
            <ChevronRight />
          </ActionButton>
        </Flex>
      </Flex>
    </View>
  );
}

function MultiInfo({
  vups,
  onCoverage,
}: {
  vups: Vup[];
  onCoverage: (vups: Vup[]) => void;
}) {
  return (
    <View height={"100%"}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={"size-150"}
        height={"100%"}
      >
        <Flex direction={"row"} gap={"size-100"} wrap={"wrap"}>
          {vups.map((vup) => (
            <Avatar
              key={vup.uid}
              src={vup.avatar}
              size={"avatar-size-700"}
              marginTop={"size-250"}
            />
          ))}
        </Flex>
        <Heading level={2} margin={0}>
          {vups.map((vup) => vup.name + " ")}
        </Heading>

        <Flex
          marginTop={"size-150"}
          marginBottom={"size-150"}
          direction={"column"}
          gap={"size-150"}
        >
          <ActionButton onPress={() => onCoverage(vups)}>
            <Text>粉丝重合情况</Text>
            <ChevronRight />
          </ActionButton>
        </Flex>
      </Flex>
    </View>
  );
}
